"use client";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import L from "leaflet"; // Importação direta do Leaflet

export default function Mapa() {
  const [position, setPosition] = useState<LatLngExpression>([
    -15.821418905398113, -48.11420586677716,
  ]);

  const mapLoaded = useRef(false); // Referência para controlar se o mapa já foi carregado

  // Criar o ícone fora do useEffect, para garantir que o Leaflet esteja carregado antes
  const icon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  // Componente para atualizar a posição do mapa
  const SetCenter = ({ position }: { position: LatLngExpression }) => {
    const map = useMap();

    useEffect(() => {
      // Garantir que a posição e o zoom sejam definidos apenas uma vez
      if (!mapLoaded.current) {
        map.setView(position, 18); // Definir o centro e o zoom
        mapLoaded.current = true; // Marca como carregado para não atualizar novamente
      }
    }, [position, map]); // Atualiza quando a posição mudar

    return null; // Não renderiza nada
  };

  return (
    <div style={{ width: "100%", height: "475px", zIndex: "0"}} className="relative">
      <MapContainer
      key={JSON.stringify(position)}
        style={{ width: "100%", height: "100%" }}
        zoom={18}
        scrollWheelZoom={false} // Desabilita o zoom com a roda do mouse
      >
        <SetCenter position={position} /> {/* Atualiza o centro do mapa */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={icon}> {/* Use o ícone diretamente aqui */}
          <Popup>Localização</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
