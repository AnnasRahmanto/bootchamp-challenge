import React from "react";
import Input from "../../component/Input.js";
import SelectBox from "../../component/Selectbox.js";


const SearchCar = (props) => {
  return (
    <div>
      <div className="container position-absolute start-50 translate-middle">
        <div className="card shadow">
          <div className="card-body">
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-5">
              <div className="col text-center text-md-start">
                <Input
                  //   onChange={handleChange}
                  placeholder="Masukan Nama/Tipe Mobil"
                  className="text-detail form-control"
                  name="carName"
                  label={"Nama Mobil"}
                />
              </div>
              <div className="col text-center text-md-start">
                <SelectBox
                  //   onChange={handleChange}
                  name="kapasitas"
                  title="Masukan Kapasitas Mobil"
                  label="Kategori"
                  //   data={categoryData}
                  
                />
              </div>
              <div className="col text-center text-md-start">
                <SelectBox
                  //onChange={handleChange}
                  name="harga"
                  title="Masukan Harga Sewa"
                  label="Harga Sewa"
                  //data={priceData}
                />
              </div>
              <div className="col text-center text-md-start">
                <SelectBox
                  //onChange={handleChange}
                  name="status"
                  title="Masukan Status Mobil"
                  label="Status"
                  //data={statusData}
                />
              </div>
              <div className="col d-flex align-items-end">
                <button type="button" className="btn btn-success ms-5">
                  Cari Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCar;
