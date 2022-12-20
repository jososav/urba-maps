import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import ImageMapper from "react-img-mapper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const AREAS = [
  {
    id: "469f9800-c45a-483f-b13e-bd24f3fb79f4",
    title: "Hardwood",
    shape: "poly",
    name: "19",
    fillColor: "#eab54d4d",
    strokeColor: "black",
    coords: [460, 103, 477, 104, 492, 138, 484, 148, 454, 118],
    polygon: [
      [459, 122],
      [477, 104],
      [492, 138],
      [484, 148],
      [454, 118],
    ],
  },
];

const LOTES = {
  19: {
    name: "Lote 19",
    description: "1000m2",
  },
};

const Modal = ({ setSelected, selected }) => {
  if (!selected) return null;

  const lote = LOTES[selected];

  return (
    <div onClick={() => setSelected(null)} className={styles.modal}>
      <div className={styles.data}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {lote.name}
            </Typography>
            <Typography variant="body2">
              Descripción: {lote.description}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default function Home() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [selected]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <Modal setSelected={setSelected} selected={selected} />
      <Container maxWidth="lg" className={styles.container}>
      <Typography variant="h3" component="div">Lotes del condominio</Typography>
        <ImageMapper
          onClick={({ name }) => setSelected(name)}
          width={1000}
          imgWidth={1000}
          src="/diseno.jpg"
          map={{
            name: "test",
            areas: AREAS,
          }}
        />
      </Container>
    </>
  );
}
