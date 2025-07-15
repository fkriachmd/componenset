import{j as e,L as l,a as i,b as c,c as n}from"./react-live-vendor-C0Y3ijKc.js";import{A as d,e as m}from"./lucide-vendor-DNT4MPG-.js";import"./router-vendor-BuJVcq4P.js";import"./react-vendor-DJG_os-6.js";function o({code:t,scope:a={},title:r="Component.tsx",editorHeight:s="420px"}){return e.jsxs("div",{className:"border border-gray-700 rounded-2xl overflow-hidden mt-6 fira-code-editor",children:[e.jsx("style",{children:`
          .editor-fira-code,
          .editor-fira-code textarea,
          .editor-fira-code pre,
          .editor-fira-code code {
            font-family: "Fira Code", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace !important;
            font-feature-settings: "liga" 1, "calt" 1 !important;
            font-variant-ligatures: contextual !important;
          }
        `}),e.jsxs(l,{code:t,scope:{ArrowRight:d,...a},theme:{plain:{backgroundColor:"#001822",color:"#abb2bf"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#5c6370",fontStyle:"italic"}},{types:["punctuation"],style:{color:"#abb2bf"}},{types:["property","tag","boolean","number","constant","symbol","deleted"],style:{color:"#d19a66"}},{types:["string","char","attr-value","regex","variable"],style:{color:"#98c379"}},{types:["operator","entity","url"],style:{color:"#56b6c2"}},{types:["atrule","attr-name","keyword"],style:{color:"#c678dd"}},{types:["function","class-name"],style:{color:"#61afef"}},{types:["tag"],style:{color:"#e06c75"}},{types:["script"],style:{color:"#c678dd"}},{types:["function-variable"],style:{color:"#61afef"}},{types:["selector"],style:{color:"#e06c75"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}}]},children:[e.jsx("div",{className:"flex w-full justify-center py-4",children:e.jsx(i,{})}),e.jsxs("div",{className:"border-t border-gray-700 max-h-80 overflow-auto",children:[e.jsx("div",{className:"bg-gray-800 px-4 py-2 text-sm text-gray-300",children:r}),e.jsx("div",{className:"editor-fira-code",children:e.jsx(c,{className:"editor-fira-code",style:{fontSize:14,minHeight:s,padding:"16px",backgroundColor:"#001822",color:"#abb2bf",outline:"none",border:"none"}})})]}),e.jsx(n,{style:{backgroundColor:"#fef2f2",color:"#b91c1c",padding:"8px",margin:"8px 16px",borderRadius:"4px",fontSize:"14px"}})]})]})}function h(){return e.jsxs("div",{className:"w-full p-8",children:[e.jsxs("header",{className:"mb-12",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"Cards"}),e.jsx("p",{className:"text-lg text-gray-400",children:"Use the card component to display information in a compact way and link to other internal pages."})]}),e.jsx("div",{id:"content",children:e.jsxs("div",{className:"",children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-2 flex items-center gap-2",children:[e.jsx(m,{}),"Examples"]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("p",{className:"text-xl font-semibold text-accent hover:text-accent/70 transition-all duration-300 mb-2 w-fit",children:"Text Card"}),e.jsx("p",{children:"The call to action text defaults to Learn more and can be customized using the React-Ts."}),e.jsx(o,{code:`() => {
  // import { ArrowRight } from "lucide-react";
   
  return (
    <a
      href="#"
      className="w-96 bg-black/20 rounded-2xl py-6 px-8 m-2 flex flex-col gap-4 group hover:bg-black/40 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-2">
        Collaboration is the key to DevOps success
      </h3>
      <p className="text-sm text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsa sequi vitae?
      </p>
      <p className="text-link w-fit">
        Learn more
        <ArrowRight
          height={18}
          className="inline-block ml-1 group-hover:translate-x-2 transition-all duration-300"
        />
      </p>
    </a>
  );
}`,title:"Card Text",editorHeight:"420px"})]}),e.jsxs("div",{className:"",children:[e.jsx("p",{className:"text-xl font-semibold text-accent hover:text-accent/70 transition-all duration-300 mb-2 w-fit",children:"Image Card"}),e.jsx("p",{children:"Combine Image and Label when you need to add more metadata or context to the Card."}),e.jsx(o,{code:`() => {
  // import { ArrowRight } from "lucide-react";
   
  return (
    <a href="#" className="w-96 px-8 py-7 bg-black/20 rounded-2xl flex flex-col items-start gap-4 group hover:bg-black/30 transition-all duration-300">
      <img
        src="https://placehold.co/356x237"
        alt="Card Image"
        className="rounded-xl"
      />
      <span className="text-sm px-4 py-1 rounded-full border border-link text-link">
        Beta
      </span>
      <h3 className="text-xl font-semibold">Code search & code view</h3>
      <p className=" text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis perspiciatis neque aliquam eius, explicabo ad laborum?
      </p>
      <p className="text-link w-fit">
        Learn more
        <ArrowRight
          height={18}
          className="inline-block ml-1 group-hover:translate-x-2 transition-all duration-300"
        />
      </p>
    </a>
  );
}`,title:"Card Image",editorHeight:"420px"})]})]})})]})}export{h as default};
