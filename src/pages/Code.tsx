import React, { useState } from "react";
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

export default function CodeBlock() {
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

  const exampleCode: string = `import { Heart, Star, Code } from "lucide-react";

function App() {
  return (
    <div>
      <Heart color="red" size={48} />
      <Star color="gold" size={48} />
      <Code color="blue" size={48} />
    </div>
  );
}`;

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
    <div className="p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Example Usage</h2>
        <CodeBlockComponent code={exampleCode} language="jsx" />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlockComponent
          code={generateInstallCommand()}
          language="bash"
          extraButtons={<>{createPackageManagerButtons()}</>}
        />
      </div>
    </div>
  );
}

export { CodeBlockComponent };
