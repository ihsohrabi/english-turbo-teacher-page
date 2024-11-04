let QcForm = () => {
  let tagHandler = (elem) => {
    return document.querySelector(elem);
  };
  let QcFormdefault = ` <form class="w-full mt-8 p-2" id="qcform">
                  <label
                    class="before:inline-block before:w-1 before:h-1 before:bg-[#2b2b2bcc] before:rounded-full text-[#2b2b2bcc] before:ml-1 text-[12px] before:mb-[1px] inline-block"
                    for="nounce"
                    >کد یکبار مصرف خود را وارد کنید</label
                  >
                  <input
                  id="nounce"
                    type="text"
                    placeholder="مثال: 2ac7fb"
                    class="!font-sans w-full h-[30px] my-2 text-[12px] px-2 text-[#] border rounded-md focus:outline-[#ef4444]"
                  />
                  <input
                    type="submit"
                    value="تایید"
                    class="w-full h-[30px] my-2 text-white bg-[#ef4444] text-[12px] px-2 text-[#] border rounded-md focus:outline-[#ef4444]"
                  />
                </form>`;
  tagHandler("#qc-form-container").insertAdjacentHTML(
    "beforeend",
    QcFormdefault
  );
  tagHandler("#qcform").addEventListener("submit", (e) => {
    e.preventDefault();

    let getNounce = async () => {
      let req = await fetch("http://localhost:3001/nounces");
      let res = await req.json();
      let nounceList = res;
      let nounceCheck = nounceList.find(
        (item) => item.nounce === e.target.children[1].value
      );
      if (nounceCheck) {
        tagHandler("#qcform").classList.add("hidden");
        console.log("code is ok!!!");
        
      } else {
        console.log("code is not correct!!!  :(");
      }
    };
    getNounce();
  });
};
export default QcForm;
