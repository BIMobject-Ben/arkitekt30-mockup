// Fil: src/components/UploadManager.jsx (demo lokalt – lagrar metadata i localStorage)
import { useEffect, useState } from "react";

const META_KEY = "arkitekt30:files";

export default function UploadManager() {
  const [items, setItems] = useState([]);
  const [meta, setMeta] = useState({ title: "", phase: "Bygghandling", app: "Revit", lod: "Hög", tags: "" });

  useEffect(() => {
    const raw = localStorage.getItem(META_KEY);
    setItems(raw ? JSON.parse(raw) : []);
  }, []);

  const saveItems = (list) => {
    setItems(list);
    localStorage.setItem(META_KEY, JSON.stringify(list));
  };

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file); // Demo: bara preview lokalt
    const entry = { id: crypto.randomUUID(), url, name: file.name, size: file.size, ...meta, tags: meta.tags.split(",").map(t=>t.trim()).filter(Boolean) };
    saveItems([entry, ...items]);
  };

  return (
    <div className="bg-secondary rounded-md p-6">
      <h3 className="text-lg font-semibold mb-3">Lägg till exempel (demo-läge)</h3>
      <div className="grid md:grid-cols-2 gap-3 mb-3">
        <input className="border rounded-md px-3 py-2" placeholder="Titel" value={meta.title} onChange={(e)=>setMeta({...meta, title:e.target.value})} />
        <select className="border rounded-md px-3 py-2" value={meta.phase} onChange={(e)=>setMeta({...meta, phase:e.target.value})}>
          {['Förstudie','Systemhandling','Bygghandling','Produktion','Digital leverans'].map(p=> <option key={p}>{p}</option>)}
        </select>
        <select className="border rounded-md px-3 py-2" value={meta.app} onChange={(e)=>setMeta({...meta, app:e.target.value})}>
          {['Revit','Archicad'].map(p=> <option key={p}>{p}</option>)}
        </select>
        <select className="border rounded-md px-3 py-2" value={meta.lod} onChange={(e)=>setMeta({...meta, lod:e.target.value})}>
          {['Låg','Medium','Hög'].map(p=> <option key={p}>{p}</option>)}
        </select>
        <input className="border rounded-md px-3 py-2 md:col-span-2" placeholder="Taggar (komma-separerat)" value={meta.tags} onChange={(e)=>setMeta({...meta, tags:e.target.value})} />
      </div>
      <input type="file" onChange={onFileChange} className="mb-4" />

      <div className="grid md:grid-cols-3 gap-4">
        {items.map(it => (
          <div key={it.id} className="bg-background rounded-md shadow p-4">
            <div className="h-32 bg-accent rounded mb-3 flex items-center justify-center text-sm">{it.app} • {it.lod}</div>
            <h4 className="font-medium">{it.title || it.name}</h4>
            <p className="text-sm text-secondary">{it.phase} • {Math.round(it.size/1024)} kB</p>
            {it.tags?.length ? <p className="text-xs mt-1">Taggar: {it.tags.join(', ')}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}