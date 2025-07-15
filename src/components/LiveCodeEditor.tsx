import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { ArrowRight } from "lucide-react";

interface LiveCodeEditorProps {
  code: string;
  scope?: Record<string, unknown>;
  title?: string;
  editorHeight?: string;
}

export default function LiveCodeEditor({
  code,
  scope = {},
  title = "Component.tsx",
  editorHeight = "420px",
}: LiveCodeEditorProps) {
  return (
    <div className="border border-gray-700 rounded-2xl overflow-hidden mt-6 fira-code-editor">
      <style>
        {`
          .editor-fira-code,
          .editor-fira-code textarea,
          .editor-fira-code pre,
          .editor-fira-code code {
            font-family: "Fira Code", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace !important;
            font-feature-settings: "liga" 1, "calt" 1 !important;
            font-variant-ligatures: contextual !important;
          }
        `}
      </style>
      <LiveProvider
        code={code}
        scope={{ ArrowRight, ...scope }}
        theme={{
          plain: {
            backgroundColor: "#001822",
            color: "#abb2bf",
          },
          styles: [
            {
              types: ["comment", "prolog", "doctype", "cdata"],
              style: {
                color: "#5c6370",
                fontStyle: "italic",
              },
            },
            {
              types: ["punctuation"],
              style: {
                color: "#abb2bf",
              },
            },
            {
              types: [
                "property",
                "tag",
                "boolean",
                "number",
                "constant",
                "symbol",
                "deleted",
              ],
              style: {
                color: "#d19a66",
              },
            },
            {
              types: ["string", "char", "attr-value", "regex", "variable"],
              style: {
                color: "#98c379",
              },
            },
            {
              types: ["operator", "entity", "url"],
              style: {
                color: "#56b6c2",
              },
            },
            {
              types: ["atrule", "attr-name", "keyword"],
              style: {
                color: "#c678dd",
              },
            },
            {
              types: ["function", "class-name"],
              style: {
                color: "#61afef",
              },
            },
            {
              types: ["tag"],
              style: {
                color: "#e06c75",
              },
            },
            {
              types: ["script"],
              style: {
                color: "#c678dd",
              },
            },
            {
              types: ["function-variable"],
              style: {
                color: "#61afef",
              },
            },
            {
              types: ["selector"],
              style: {
                color: "#e06c75",
              },
            },
            {
              types: ["important", "bold"],
              style: {
                fontWeight: "bold",
              },
            },
            {
              types: ["italic"],
              style: {
                fontStyle: "italic",
              },
            },
          ],
        }}
      >
        {/* Preview Section - Live Preview with same styling as CardText */}
        <div className="flex w-full justify-center py-4">
          <LivePreview />
        </div>

        {/* Code Editor Section */}
        <div className="border-t border-gray-700 max-h-80 overflow-auto">
          <div className="bg-gray-800 px-4 py-2 text-sm text-gray-300">
            {title}
          </div>
          <div className="editor-fira-code">
            <LiveEditor
              className="editor-fira-code"
              style={{
                fontSize: 14,
                minHeight: editorHeight,
                padding: "16px",
                backgroundColor: "#001822",
                color: "#abb2bf",
                outline: "none",
                border: "none",
              }}
            />
          </div>
        </div>

        {/* Error Display */}
        <LiveError
          style={{
            backgroundColor: "#fef2f2",
            color: "#b91c1c",
            padding: "8px",
            margin: "8px 16px",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        />
      </LiveProvider>
    </div>
  );
}
