import { Link } from "react-router-dom";

import type { Roteiro } from "@/types";

export function RoteiroCard({ roteiro }: { roteiro: Roteiro }) {
  return (
    <Link to={`/roteiros/${roteiro.slug}`} className="group block">
      <div className="overflow-hidden">
        <img
          src={roteiro.imagemCapa}
          alt={`${roteiro.nome} — ${roteiro.destino}, ${roteiro.pais}`}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4">
        <p className="label-eyebrow">
          {roteiro.destino} · {roteiro.pais}
        </p>
        <h3 className="mt-1 font-display text-xl text-navy">{roteiro.nome}</h3>
        <p className="mt-1 font-sans text-xs text-navy/60">
          {roteiro.duracao} · {roteiro.estilo}
        </p>
      </div>
    </Link>
  );
}
