// const forms = document.querySelectorAll("form");
// const email = document.querySelector("#email") as HTMLInputElement;
// const title = document.querySelector("#title") as HTMLInputElement;
// const text = document.querySelector("#text") as HTMLTextAreaElement;
// const checkbox = document.querySelector("#checkbox") as HTMLInputElement;

// interface Form {
//   email?: string;
//   title?: string;
//   text?: string;
//   checkbox?: boolean;
// }

// const formData: Form = {
//   email: "",
//   title: "",
//   text: "",
//   checkbox: false,
// };

// forms.forEach((form) => {
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const form = e.target as HTMLFormElement;
//     if (form?.elements.length === 4) {
//       formData.title = title.value;
//       formData.text = text.value;
//       formData.checkbox = checkbox.checked;
//     } else {
//       formData.email = email.value;
//     }
//     validateFormData(formData);
//   });
// });

// // Последовательность действий:
// // 1) Происходит submit любой из форм
// // 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// // 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// // 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

// function validateFormData(data: Form): boolean {
//   // Если каждое из свойств объекта data правдиво...
//   if (Object.values(data).every((elem) => elem !== "")) {
//     checkFormData(data);
//     return true;
//   } else {
//     console.log("Please, complete all fields");
//     return false;
//   }
// }

// function checkFormData(data: Form): void {
//   const { email } = data;
//   const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

//   // Если email совпадает хотя бы с одним из массива
//   if (emails.includes(email as string)) {
//     console.log("This email exists already");
//   } else {
//     console.log("Fetching data...");
//   }
// }
