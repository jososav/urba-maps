import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from 'react'
import ImageMapper from "react-img-mapper";

const AREAS = [
  {
    id: "469f9800-c45a-483f-b13e-bd24f3fb79f4",
    title: "Hardwood",
    shape: "poly",
    name: "19",
    fillColor: "#eab54d4d",
    strokeColor: "black",
    coords: [
      460, 103, 477, 104, 492, 138, 484,
      148, 454, 118,
    ],
    polygon: [
      [459, 122],
      [477, 104],
      [492, 138],
      [484, 148],
      [454, 118],
    ],
  },
]

const LOTES = {
  19: {
    name: 'Lote 19',
    description: '1000m2'
  }
}

const Modal = ({ setSelected, selected }) => {
  if(!selected) return null

  const lote = LOTES[selected]
  
  return (
    <div onClick={() => setSelected(null)} className={styles.modal}>
      <div className={styles.data}>
        Lote: {lote.name} <br />
        Descripción: {lote.description}
      </div>
    </div>
  )
}

export default function Home() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if(selected) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }, [selected])

  return (
    <>
      <Modal setSelected={setSelected} selected={selected} />
      <div>POC DE CONDOMINIOS</div>
      <ImageMapper
        onClick={({name}) => setSelected(name)}
        onImageClick={(event) => {
          console.log(event, "area");
        }}
        width={1000}
        imgWidth={1000}
        src="/diseno.jpg"
        map={{
          name: "test",
          areas: AREAS,
        }}
      />
    </>
  );
}
