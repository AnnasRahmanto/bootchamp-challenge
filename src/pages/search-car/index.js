import React, {useState} from "react";
import Input from "../../component/Input.js";
import SelectBox from "../../component/Selectbox.js";

const categoryData = [{
  value: 2,
  label: "2 - 4 Orang"
}, {
  value: 4,
  label: "4 - 6 Orang"
}, {
  value: 6,
  label: "6 - 8 Orang"
}]

const priceData = [{
  value: 400000,
  label: "< Rp.400.000"
}, {
  value: 600000,
  label: " Rp. 400.000 - Rp. 600.000"
}, {
  value: 400000,
  label: "> Rp.400.000"
}]

const statusData = [{
  value: true,
  label: "Disewa"
}, {
  value: false,
  label: "Tidak Disewa"
}]

const SearchCar = (props) => {
  const [value, setValue] = useState({
    carName: "",
    kapasitas: "",
    harga: "",
    status: ""
  })
  const handleChange = (e) => {
      const { name, value } = e.target
      setValue(prev => ({
          ...prev,
          [name]: value
      }))
  }
  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(value);
  }

  return (
    <div>
      <div className="container position-absolute start-50 translate-middle">
        <div className="card shadow">
          <div className="card-body">
            <div className="d-flex gap-4">
              <div className="col">
                <Input
                  onChange={handleChange}
                  placeholder="Masukan Nama/Tipe Mobil"
                  className="text-detail form-control"
                  name="carName"
                  label={"Nama Mobil"}
                                  
                />
              </div>
              <div className="col">
                <SelectBox
                  onChange={handleChange}
                  name="kapasitas"
                  title="Masukan Kapasitas Mobil"
                  label="Kategori"
                  data={categoryData}
                  
                />
              </div>
              <div className="col">
                <SelectBox
                  onChange={handleChange}
                  name="harga"
                  title="Masukan Harga Sewa"
                  label="Harga Sewa"
                  data={priceData}
                />
              </div>
              <div className="col">
                <SelectBox
                  onChange={handleChange}
                  name="status"
                  title="Masukan Status Mobil"
                  label="Status"
                  data={statusData}
                />
              </div>
              <div className="d-flex align-items-end">
                <button type="button" className="btn btn-success">
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