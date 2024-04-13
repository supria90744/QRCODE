import { useState } from "react"
export const Qrcode = () => {
  const [img,setImg]=useState("");
  const [loading,setLoading]=useState(false);
  const [qrData,setQrData]=useState("")
  const [qrSize,setQrSize]=useState("")

  async function genQR(){
      setLoading(true);
      try{
        const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
        setImg(url);
      }
      catch(error){
        console.error("Error generating QR code",error);
      }
      finally{
        setLoading(false);
      }
  }
  function downQR(){
    fetch(img)
    .then((response) =>response.blob())
    .then((blob) =>{
      const link=document.createElement("a");
      link.href=URL.createObjectURL(blob);
      link.download="QRCode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch((error)=>{
      console.error("Error downloading QR code",error);
    })
  }
  return (
    <div className="app-container" >
        <h1>QR CODE GENERATOR</h1>
       {loading && <p>Please Wait........</p>}
        {img && <img src={img} className="qrcodeimg" />}

        <div>
            <label htmlFor="dataInput" className="inputlabel">Data for QR Code</label>
            <input type="text" id="dataInput" value={qrData} placeholder="Enter data for QR code" onChange={(e)=> setQrData(e.target.value)}/>
            <label htmlFor="sizeInput" className="inputlabel">Image Size(e.g.,150):</label>
            <input type="text" id="sizeInput" placeholder="Enter Image Size" value={qrSize} onChange={(e)=> setQrSize(e.target.value)}/>
            <button className="generate" disabled={loading} onClick={genQR}>Generate QR Code</button>
            <button className="down" onClick={downQR}>Download QR Code</button>
        </div>
        <p className="foot">Designed by<a href="https://supriausercard.netlify.app/"> Suppu</a></p>
    </div>
  )
}
