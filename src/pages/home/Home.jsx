import { useState, useEffect } from "react";
import "./home.css";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";

export default function Home() {
  const [packages, setPackages] = useState("");
//   const [rows, setRows] = useState("");
  useEffect(() => {
    const checkPackages = async () => {
         await axios
        .get("https://api.ziyuno.com/api/package/packages/en", {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then(function (response) {
          setPackages(response.data);
        });
    };

    checkPackages();
  }, []);

  const columns = [
    { field: "ad", headerName: "Adı", width: 300 },
    {
      field: "fiyat",
      headerName: "Fiyatı",
      width: 200,
      editable: true,
    },
    {
      field: "islem",
      headerName: "İşlem",
      width: 200,
      editable: true,
    },
  ];


  const rows = [
    { id: 1,ad: packages?.result[0].name, fiyat: packages?.result[0].price, islem: 'Sil' },
    { id: 2,ad: packages?.result[1].name, fiyat: packages?.result[1].price, islem: 'Sil' },
    { id: 3,ad: packages?.result[2].name, fiyat: packages?.result[2].price, islem: 'Sil' },
    { id: 4,ad: packages?.result[3].name, fiyat: packages?.result[3].price, islem: 'Sil' },
    { id: 5,ad: packages?.result[4].name, fiyat: packages?.result[4].price, islem: 'Sil' },
    { id: 6,ad: packages?.result[5].name, fiyat: packages?.result[5].price, islem: 'Sil', },
  ];
  console.log(packages);
  return (
    <>
        <div className="navbar">
            <button className="button">Menu 1</button>
            <button className="button">Menu 2</button>
            <button className="button">Menu 3</button>
        </div>
        <div className="labrus">Labrus</div>
      <div className="homeContainer">
          <div className="home-menu">
              <span className="menuSpan main-menu">AnaSayfa</span>
              <span className="menuSpan">Kullanıcılar</span>
              <span className="menuSpan">Paketler</span>
              <span className="menuSpan">Çıkış</span>
          </div>
        <div className="home-table" style={{ height: 450, width: "50%"}}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={6}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
}
