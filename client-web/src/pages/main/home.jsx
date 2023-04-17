import { Link } from "react-router-dom";
import { useState } from "react";

import bg from './assets/homeBG.jpeg'
export default function Home() {
  const [modalSet, setModalSet] = useState(false);
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container d-flex justify-content-between">
            <Link className="navbar-brand" to="/">Word memorization</Link>
            <form className="d-flex" role="search" onSubmit={(e)=>e.preventDefault()}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Qidirish"
                    aria-label="Search"
                />
              <button className="btn btn-outline-success" type="submit"> <i className="bi bi-search"></i> </button>
            </form>
            <button className="btn btn-primary" onClick={()=>setModalSet(!modalSet)}>
              <i className='bx bxs-user'></i>
            </button>
            {modalSet && <ProfilModal/>}
        </div>
        </nav>
        <div className="slide" style={{background: `url(${bg}`,backgroundPosition: 'cover', backgroundSize: 'cover'}}>
          <div className="container py-2">
            <h2 className="text-center text-light">So'z yodlash</h2>
            <p className="text-center px-4 text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sint, esse ratione molestias voluptatum illum laboriosam debitis.</p>
            <div className="row mt-2">
              <div className="col card p-3 py-4 m-3 text-center bg-primary bg-gradient text-light" role="button">
                <i className="bi bi-plus-square-fill fs-3"></i>
                <span className="fs-4">Yangi so'zlar kiritish</span>
              </div>
              <div className="col card p-3 py-4 m-3 text-center bg-dark bg-gradient text-light" role="button">
                <i className="bi bi-arrow-repeat fs-3"></i>
                <span className="fs-4">Takrorlash kerak bo'lgan so'zlar</span>
              </div>
              <div className="col card p-3 py-4 m-3 text-center bg-success bg-gradient text-light" role="button">
                <i className="bi bi-card-checklist fs-3"></i>
                <span className="fs-4">Test orqali so'z yodlash</span>
              </div>
              <div className="col card p-3 py-4 m-3 text-center bg-secondary bg-gradient text-light" role="button">
                <i className="bi bi-bookmark-check fs-3"></i>
                <span className="fs-4">Yod olingan so'zlar</span>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col card p-3 py-4 m-3 text-center bg-info bg-gradient text-light" role="button">
                <i className="bi bi-check2-all fs-3"></i>
                <span className="fs-4">Jami so'zlar takrorlash</span>
              </div>
              <div className="col card p-3 py-4 m-3 text-center bg-danger bg-gradient text-light" role="button">
                <i className="bi bi-body-text fs-3"></i>
                <span className="fs-4">So'zlardan gap tuzush</span>
              </div>
              <div className="col card p-3 py-4 m-3 text-center bg-warning bg-gradient text-light" role="button">
                <i className="bi bi-pie-chart-fill fs-3"></i>
                <span className="fs-4">Statistika</span>
              </div>
              <div className="col card p-3 py-4 m-3 text-center bg-success bg-gradient text-light" role="button">
                <i className="bi bi-translate fs-3"></i>
                <span className="fs-4">Tarjima qilish</span>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col card p-3 py-4 m-3 text-center bg-warning bg-gradient text-light" role="button">
                <i className="bi bi-body-text fs-3"></i>
                <span className="fs-4">Matindan yangi so'zlarni topish</span>
              </div>
              <div className="col card p-3 py-4 m-3 text-center bg-secondary bg-gradient text-light" role="button">
                <i className="bi bi-image-fill fs-3"></i>
                <span className="fs-4">Rasmdan so'zlar olish</span>
              </div>
              <div className="col card p-3 py-4 m-3 text-center bg-primary bg-gradient text-light" role="button">
                <i className="bi bi-bar-chart-line-fill fs-3"></i>
                <span className="fs-4">Foydalanuvchi retingi</span>
              </div>
              <div className="col card p-3 py-4 m-3 text-center bg-dark bg-gradient text-light" role="button">
                <i className="bi bi-info-square fs-3"></i>
                <span className="fs-4">Dastur va dasturchi haqida</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="footer">
          <div className="d-flex flex-row justify-content-between">
            <div className="col p-2">
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div> */}
    </>
  );
}

const ProfilModal = ()=>{
  return(
    <>
      <div className="card p-1" style={{
        position: 'absolute',
        right: '5%',
        top: '98%',
        zIndex: 5,
      }}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" role="button">Profil</li>
          <li class="list-group-item" role="button">Sozlanmalar</li>
          <li class="list-group-item d-flex" role="button">
            <i class="bi bi-brightness-high-fill"></i>
            <div class="form-check form-switch ms-2">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" disabled/>
            </div>
            <i class="bi bi-moon-fill"></i>
          </li>
          <li class="list-group-item" role="button">Tizimdan chiqish</li>
        </ul>
      </div>
    </>
  )
}