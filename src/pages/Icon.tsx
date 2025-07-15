import { useState } from "react";
import { Clipboard } from "lucide-react";

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
    <div className="relative group">
      {extraButtons && (
        <div className="flex gap-2 border border-b-0 border-gray-700 rounded-t-md px-2 pt-2">
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
        className={`border border-gray-700 text-text text-sm p-4 ${
          extraButtons ? "rounded-b-md border-t-0" : "rounded-md"
        } overflow-auto font-mono language-${language} relative`}
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
    const buttons = [];

    for (const [key, manager] of Object.entries(packageManagers)) {
      buttons.push(
        <button
          key={key}
          onClick={() => setSelectedPackageManager(key)}
          className={`px-3 py-1 text-xs transition-colors ${
            selectedPackageManager === key
              ? "border-b-[3px] border-primary text-white"
              : " text-gray-700 hover:text-gray-900"
          }`}
        >
          {manager.displayName}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Icons</h1>
      <p className="mb-8">
        Use the icon component to display Octicons with an optional
      </p>
      <div id="lucide-react">
        <div className="flex">
          <div className="w-full">
            <a
              href="https://lucide.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold group flex"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out font-bold mr-4 text-accent/80">
                #
              </span>
              <h1 className="font-bold mr-4 mb-4 hover:text-white/70 transition-all duration-300 ease-in-out">
                Lucide-React
              </h1>
            </a>
            <p className="w-[40rem] pl-8">
              Lucide is an open-source icon library that provides 1000+ vector
              (svg) files for displaying icons and symbols in digital and
              non-digital projects.
            </p>
            <div className="pl-10 w-full mt-4">
              <h2 className="text-2xl font-semibold mb-4">Installation</h2>
              <CodeBlockComponent
                code={generateInstallCommand()}
                language="bash"
                extraButtons={<>{createPackageManagerButtons()}</>}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export CodeBlockComponent agar bisa digunakan di file lain
export { CodeBlockComponent };
