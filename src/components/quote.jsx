// import useGoogleSheets from "use-google-sheets";
// import xlsx from "../data/TheIO.vn.xlsx";

export const Quote = (props) => {
  // const { data, loading, error } = useGoogleSheets({
  //   apiKey: '-',
  //   sheetId: '1ryOwqflsCkoi5hZcwVmAsy4Lm9IvJcRD_iu8QkO3kno',
  //   sheetsOptions: [{ id: 'Báo Giá' }],
  // });
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  //
  // if (error) {
  //   return <div>Error!</div>;
  // }

  return (
    <div id='quote'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Bảng Giá Sản Phẩm</h2>
        </div>
        <div className='row'>
          <iframe src='https://docs.google.com/spreadsheets/d/e/2PACX-1vQOe2jDEIvVMBE1_nk88dpEY7yg156rOF5VxrCPx_s11d-p4qRKUr8ce3pkMDgoMKjvbsGZz5u1G4xA/pubhtml?gid=188804687&single=true' width='100%' height='565px'></iframe>
        </div>
      </div>
    </div>
  )
}
