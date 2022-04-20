import "../peoperties/fontSize.css";

function DataInputForm() {
  return (
    <div className=" p-2 mb-2 bg-white shadow ">
      <form>
        <div class="form-group  mt-4 pl-5 pr-5">
          <input
            type="text"
            class="form-control"
            id="ProductName"
            placeholder="ຊື່ສິນຄ້າ"
          />
        </div>
        <div class="form-group mt-1 pl-5 pr-5">
          <input
            type="number"
            class="form-control"
            id="ProductName"
            placeholder="ຈຳນວນ"
          />
        </div>

        <div class="form-group mt-1 pl-5 pr-5">
          <input
            type="number"
            class="form-control"
            id="ProductName"
            placeholder="ລາຄາ"
          />
        </div>

        <div class="form-group mt-1 pl-5 pr-5">
          <input
            type="number"
            class="form-control"
            id="ProductName"
            placeholder="ຫົວໜ່ວຍ"
          />
        </div>

        <div class="form-group bfh-phone mt-1 pl-5 pr-5">
          <input
            type="text"
            class="form-control"
            id="CustomerName"
            placeholder="ຊຶ່ລູກຄ້າ"
          />
        </div>
        <div class="form-group bfh-phone mt-1 pl-5 pr-5">
          <input
            type="tel"
            class="form-control"
            id="Phone"
            placeholder="ເບີໂທລະສັບ"
          />
        </div>

        <div class="col-md-12 text-center">
          <button
            type="submit"
            class="btn btn-warning  btn text-white mb-3 pl-4 pr-4  "
          >
            ເພິ່ມ
          </button>
        </div>
      </form>
    </div>
  );
}

function ResultForm() {
  return (
    <div>
      <div class="col-md-12 text-center p-5">
        <div class="row ">
          <div class="col-2 ">
            <label for="exampleInputPassword1">ລວມລາຄາທັງໝົດ</label>;
          </div>
          <div class="col-2">
            <label for="exampleInputPassword1">ເງິນຈ່າຍຕົວຈິງ</label>;
          </div>
          <div class="col-2">
            <label for="exampleInputPassword1">ເງິນທອນ</label>;
          </div>
          <div class="col"></div>
        </div>
        <div class="row">
          <div class="col-2 mt-1 ">
            <label for="exampleInputPassword1">100000</label>;
          </div>
          <div class="col-2">
            <div class="form-group">
              <input type="number" class="form-control" id="ActuaPrice" />
            </div>{" "}
          </div>
          <div class="col-2 mt-1">
            <label class="form-check-label">Hello</label>;
          </div>
          <div class="col"></div>
        </div>
      </div>

      <div class="col-md-12 text-center">
        <button
          type="submit"
          class="btn btn-warning  btn text-white mb-3 pl-4 pr-4 mr-5  "
        >
          ຂາຍ
        </button>
        <button
          type="submit"
          class="btn btn-warning  btn text-white mb-3 pl-4 pr-4  "
        >
          ຍົກເລີກ
        </button>
      </div>
    </div>
  );
}

function ProductRow() {
  return (
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <button
        type="submit"
        class="btn btn-warning  btn text-white mt-1"
      >
        ຍົກເລີກ
      </button>
    </tr>
  );
}

function ShowTableForm() {
  return (
    <table class="table max_rows=5">
      <thead>
        <tr>
          <th scope="col">ລຳດັບ</th>
          <th scope="col">ຊື່ສິນຄ້າ</th>
          <th scope="col">ຈຳນວນ</th>
          <th scope="col">ລາຄາ</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        < ProductRow />
        < ProductRow />
        < ProductRow />
        < ProductRow />

      </tbody>
    </table>
  );
}

function ShowDataForm() {
  return (
    <div className=" p-2 mb-2  bg-white shadow ">
      <div>
        <ShowTableForm />
      </div>
      <ResultForm />
    </div>
  );
}

function App() {
  return (
    <div className="continer mt-5" class="p-3 mb-2 bg-light text-dark">
      <div class="row">
        <div class="col-3">
          <DataInputForm />
        </div>
        <div class="col">
          <ShowDataForm />
        </div>
      </div>
    </div>
  );
}
export default App;
