import "../styles/Dropdown.css"

function Dropdown({servingsNumber, setServingsNumber}) {
  const optionsNumber = 11; 
  const selectOptions = []; 
  

  for (let i = 1; i < optionsNumber; i++) {
    selectOptions.push(<option key={i} value={i}>{i}</option>); 
  }

  return (
    <div className="div-dropdown">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"  width="25" height="25" focusable="false" role="img" aria-hidden="true" aria-label="selector-16" aria-labelledby="selector-16"><path fill-rule="evenodd" d="M11.83 6.451H4.17c-.606 0-.9-.763-.458-1.19L7.313 1.78a.983.983 0 0 1 1.374 0l3.6 3.48c.442.428.149 1.191-.458 1.191M4.17 9.55h7.66c.606 0 .9.763.458 1.19l-3.601 3.48a.983.983 0 0 1-1.374 0l-3.6-3.48c-.442-.427-.149-1.19.458-1.19" clip-rule="evenodd"></path></svg>
      <select className="custom-dropdown" value={servingsNumber} onChange={(e) => setServingsNumber(e.target.value)}>{selectOptions}</select>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="30" height="30" focusable="false" role="img" aria-hidden="true" aria-label="serving-16" aria-labelledby="serving-16"><path fill-rule="evenodd" d="M8.912 2.154C9.38 1.49 10.13 1 11.13 1s1.749.488 2.218 1.153c.453.643.653 1.455.653 2.223 0 1.644-1.143 2.856-1.803 3.428a1.6 1.6 0 0 1-.284.197v6.258c0 .41-.35.741-.783.741-.432 0-.782-.332-.782-.741V8.003a1.6 1.6 0 0 1-.288-.2c-.659-.572-1.799-1.784-1.799-3.427 0-.768.2-1.579.651-2.222m-6.13-.825c.433 0 .783.332.783.742v3.952c0 .137.117.248.261.248h.26v-4.2c0-.41.351-.742.784-.742.432 0 .782.332.782.742v4.2h.261c.144 0 .26-.111.26-.248V2.071c0-.41.351-.742.784-.742.432 0 .782.332.782.742v3.952c0 .956-.817 1.73-1.826 1.73h-.26v6.506c0 .41-.351.74-.783.74s-.783-.33-.783-.74V7.753h-.26C2.816 7.753 2 6.979 2 6.023V2.071c0-.41.35-.742.783-.742" clip-rule="evenodd"></path></svg>
    </div>
  )
  

}

export default Dropdown