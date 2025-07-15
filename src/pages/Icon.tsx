import { useState } from "react";
import { Clipboard, Link } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  extraButtons?: React.ReactNode;
}

const CodeBlockComponent: React.FC<CodeBlockProps> = ({
  code,
  language = "bash",
  extraButtons,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative group border border-gray-700 rounded-lg overflow-hidden shadow-md">
      {extraButtons && (
        <div className="flex gap-2 bg-gray-800 border-b border-gray-700 rounded-t-lg px-4 py-2">
          {extraButtons}
        </div>
      )}

      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 opacity-30 group-hover:opacity-100 transition-opacity text-white bg-gray-700 hover:bg-gray-600 text-xs px-2 py-1 rounded flex items-center gap-1 z-10"
      >
        <Clipboard size={14} />
        {copied ? "Copied!" : "Copy"}
      </button>

      <pre
        className={`bg-black/20 text-gray-300 text-sm p-4 ${
          extraButtons ? "rounded-b-lg" : "rounded-lg"
        } overflow-auto font-mono language-${language}`}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default function Icon() {
  const packageManagers = {
    npm: {
      name: "npm",
      command: "install",
      displayName: "npm",
    },
    yarn: {
      name: "yarn",
      command: "add",
      displayName: "yarn",
    },
    pnpm: {
      name: "pnpm",
      command: "install",
      displayName: "pnpm",
    },
    bun: {
      name: "bun",
      command: "add",
      displayName: "bun",
    },
  };

  const [selectedPackageManager, setSelectedPackageManager] =
    useState<string>("npm");

  const generateInstallCommand = (): string => {
    const manager =
      packageManagers[selectedPackageManager as keyof typeof packageManagers];
    return `${manager.name} ${manager.command} lucide-react`;
  };

  const createPackageManagerButtons = () => {
    return Object.entries(packageManagers).map(([key, manager]) => (
      <button
        key={key}
        onClick={() => setSelectedPackageManager(key)}
        className={`px-3 py-1 text-xs transition-colors ${
          selectedPackageManager === key
            ? "border-b-[3px] border-primary text-white"
            : "text-gray-400 hover:text-gray-200"
        }`}
      >
        {manager.displayName}
      </button>
    ));
  };

  return (
    <div className="h-fit text-gray-300 p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Icons</h1>
        <p className="text-lg text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          suscipit distinctio.
        </p>
      </header>

      <section id="lucide-react" className="mb-10">
        <div className="flex flex-col items-start">
          <a
            href="https://lucide.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold group flex items-center mb-4"
          >
            <span className="opacity-20 group-hover:opacity-100 transition-opacity duration-300 ease-in-out font-bold mr-2 text-accent">
              <Link strokeWidth={3} height={22} />
            </span>
            <h1 className="font-bold hover:text-white transition-all duration-300 ease-in-out">
              Lucide-React
            </h1>
          </a>
          <p className="w-full max-w-2xl text-gray-400 text-base">
            Lucide is an open-source icon library that provides 1000+ vector
            (SVG) files for displaying icons and symbols in digital and
            non-digital projects.
          </p>
        </div>
      </section>

      <section className="pl-10">
        <h2 className="text-2xl font-semibold mb-4 text-text">Installation</h2>
        <CodeBlockComponent
          code={generateInstallCommand()}
          language="bash"
          extraButtons={<>{createPackageManagerButtons()}</>}
        />
      </section>
    </div>
  );
}

// Export CodeBlockComponent agar bisa digunakan di file lain
export { CodeBlockComponent };
