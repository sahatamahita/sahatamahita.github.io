import React, {useEffect, useState} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';


function ExamPage() {



    useEffect(() => {

    }, []);

    return (
        <div>
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper container">
                        <label className="left white-text">59:59</label>
                        <a href="#!" className="brand-logo">XXX</a>
                        <ul className="right">
                            <li>
                                <div className="chip">
                                    <img src="https://materializecss.com/images/yuna.jpg" alt="Contact Person"/>
                                    Yuna
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>





            <div className="valign-wrapper">

                <div className="row">

                        <div className="card">
                            <div className="card-content blue-grey darken-1 white-text">
                                <span className="card-title">No. 1</span>
                                <p>Menurut pernyataan dalam pembukaan UUD 1945, perjuangan kemerdekaan merupakan tindakan yang
                                    diberkati oleh Allah karena ?</p>
                            </div>
                            <div className="card-content">
                                {[
                                    "A. Kehidupan kebangsaan yang bebas merupakan keinginan luhur",
                                    "B. Bangsa Indonesia adalah bangsa yang religius",
                                    "C. Kemerdekaan itu sudah lama diperjuangkan",
                                    "D. Banyak pengorbanan yang harus diberikan untuk mendapatkan kemerdekaan",
                                    "E. Kemerdekaan karunia Allah yang tidak perlu diperjuangkan",
                                ].map((v) => <p>
                                    <label>
                                        <input type="checkbox"/>
                                        <span className="">{v}</span>
                                    </label>
                                </p>)}
                            </div>
                            <div className="card-action center">
                                <a href="#" className="btn btn-block waves-effect waves-light">Simpan</a>
                            </div>
                            <div className="card-action">
                                <a href="#" className="left">Sebelumnya</a>
                                <a href="#" className="right">Lanjut</a>
                            </div>

                            <div className="card-content">
                                <div className="">
                                    <div className="progress">
                                        <div className="determinate" style={{ width: '10%' }}></div>
                                    </div>
                                </div>
                                <ul className="collapsible">
                                    <li>
                                        <a className="collapsible-header grey-text">
                                            <i className="material-icons">block</i>
                                            Belum Dijawab
                                            <span className="new badge red" data-badge-caption="">9</span></a>
                                    </li>
                                    <li>
                                        <a className="collapsible-header blue-grey-text">
                                            <i className="material-icons">assignment</i>
                                            Pilih Nomor
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                </div>


            </div>






        </div>
    );
}

export default ExamPage;