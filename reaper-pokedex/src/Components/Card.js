import React from "react";
import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { RiSearch2Line } from "react-icons/ri";


import './style.css';

const Card = ({pokemon, loading}) => {
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [pokeName, setPokeName] = useState('');
    const [pokeHeight, setPokeHeight] = useState('');
    const [pokeWeight, setPokeWeight] = useState('');
    const [pokeType1, setPokeType1] = useState('');
    const [pokeType2, setPokeType2] = useState('');
    const [pokeTypes, setPokeTypes] = useState('');
    const [pokeImg, setPokeImg] = useState();
    const [searchInput, setSearchInput] = useState('');

    const openPokeInfo = async(res) => {
        setPokeName(res.name);
        setPokeHeight(res.height);
        setPokeWeight(res.weight);
        setPokeType1(res.types[0].type.name)
        if (res.types.length>1) {
            setPokeType2(res.types[1].type.name)
        }      
        setPokeTypes(res.types)
        setPokeImg(res.sprites.front_default);       
        handleShow();

    }


    return(
        <>
            <Modal show={showModal} onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className="UppercasePkmName ms-auto">{pokeName}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="poke-content">
                    <img src={pokeImg} class="img-fluid img-height" alt="Responsive image"></img>
                    <p className="UppercasePkmName">
                        Height : {pokeHeight}
                    </p>

                    <p className="UppercasePkmName">
                        Weight : {pokeWeight}
                    </p>

                    {(() => {
                        if (pokeTypes.length==1) {
                            return (
                                console.log(pokeTypes.length),
                                <p className="UppercasePkmName">
                                    Type : {pokeType1}
                                </p>
                            )
                        } else {
                            return (
                                console.log(pokeTypes.length),
                                <p className="UppercasePkmName">
                                    Type : {pokeType1} / {pokeType2}                                   
                                </p>
                            )
                        }
                    })()}

                    
                    
                </Modal.Body>
            </Modal>

            <div class="form-group has-search">
                <span class="fa fa-search form-control-feedback">
                    <RiSearch2Line className="search-icon" />
                </span>
                <input type="text" class="form-control"
                onChange={event => {setSearchInput(event.target.value)}}
                placeholder="Search" />
            </div>

            <div className="row card-row">
                

                {
                    loading ? <h1>Loading...</h1> :
                    pokemon.filter((item) => {
                        if (searchInput == "") {
                            return item
                        } else if (item.name.toLowerCase().includes(searchInput.toLowerCase())){
                            return item
                        }
                    }).map((item) => {
                        return (
                            // <div className="row">
                                
                                <div className="col-md-3">
                                    <div className="card poke-card" key={item.id} onClick={()=> openPokeInfo(item)}>
                                        {/* <p className="card-id">{item.id}</p> */}
                                        <img className="card-img-top card-img" src={item.sprites.front_default} alt="Card image cap"></img>
                                        <div className="card-body">
                                            <h5 className="card-title poke-name">{item.name}</h5>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            // </div>
                            
                        )
                    })
                }
            </div>
        </>
        
    )
}

export default Card;