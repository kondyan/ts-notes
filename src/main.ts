// const currRate: string = "1.05";

// const fetchCurr = (response: string) => {
//   const data = JSON.parse(response);
//   return data;
// };

// function transferEurToUsd(
//   available: boolean,
//   amount: number,
//   commission: number
// ) {
//   if (available) {
//     let res = fetchCurr(currRate) * amount * commission;
//     console.log(res);
//   } else {
//     console.log("Сейчас обмен недоступен");
//   }
// }

// transferEurToUsd(true, 500, 1.05);

// type User = {
//   isBirthday: boolean;
//   age: number;
//   userName: string;
//   messages: {
//     error: string;
//   };
// };

// const user: User = {
//   isBirthday: true,
//   age: 40,
//   userName: "John",
//   messages: {
//     error: "Error",
//   },
// };

// const user2: User = {
//   isBirthday: false,
//   age: 52,
//   userName: "Alex",
//   messages: {
//     error: "Error",
//   },
// };

// const userTuple: [boolean, number, ...string[]] = [
//   true,
//   40,
//   "John",
//   "Alex",
//   "Anna",
// ];
// console.log(userTuple);

// const logMessage = ({
//   isBirthday,
//   age,
//   userName,
//   messages: { error },
// }: User): string => {
//   if (isBirthday === true) {
//     return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
//   } else if (isBirthday === false) {
//     return "Too early";
//   }
//   return createError(error);
// };

// const createError = (msg: string): never => {
//   throw new Error(msg);
// };

// console.log(logMessage(user));
// console.log(logMessage(user2));

// const departments: string[] = ["dev", "design", "marketing"];

// const department = departments[0];

// const report = departments
//   .filter((d: string) => d !== "dev")
//   .map((d: string) => `${d} - done`);

// const numbers: number[][] = [
//   [3, 5, 6],
//   [3, 5, 6],
// ];

// const [first] = report;
// console.log(first);
// console.log(numbers);

// let id: symbol = Symbol("id");

// const data = {
//   [id]: 1,
// };

// console.log(data[id]);

// const number1: bigint = 1n;
// const number2: bigint = 2n;

// console.log(number1 + number2);

// type userData = {
//   readings: number;
//   units: string;
//   mode?: string;
// };

// const electricityUserData: userData = {
//   readings: 95,
//   units: "kWt",
//   mode: "double",
// };

// const waterUserData: userData = {
//   readings: 3,
//   units: "m3",
// };

// const elRate: number = 0.45;
// const wRate: number = 2;

// const monthPayments: number[] = [0, 0]; // [electricity, water]

// const calculatePayments = (
//   { readings: readingsE, mode: modeE }: userData,
//   { readings: readingsW }: userData,
//   elRate: number,
//   wRate: number
// ): void => {
//   if (modeE === "double" && readingsE < 50) {
//     monthPayments[0] = readingsE * elRate * 0.7;
//   } else {
//     monthPayments[0] = readingsE * elRate;
//   }

//   monthPayments[1] = readingsW * wRate;
// };

// calculatePayments(electricityUserData, waterUserData, elRate, wRate);

// const sendInvoice = (
//   [el, water]: number[],
//   { readings: readingsE, units: unitsE }: userData,
//   { readings: readingsW, units: unitsW }: userData
// ): string => {
//   const text = `    Hello!
//     This month you used ${readingsE} ${unitsE} of electricity
//     It will cost: ${el}€

//     This month you used ${readingsW} ${unitsW} of water
//     It will cost: ${water}€`;

//   return text;
// };

// console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));

// let message: string | number;
// const messages: string[] | number[] = ["a", "b"];

// const printMsg = (msg: string[] | number | boolean): void => {
//   if (Array.isArray(msg)) {
//     msg.forEach((m) => console.log(m));
//   } else if (typeof msg === "string" || typeof msg === "number") {
//     console.log(msg.toString());
//   } else {
//     console.log(msg);
//   }
// };

// console.log(printMsg(4));
// console.log(printMsg(["string"]));

// const printReadings = (a: number | string, b: number | boolean): void => {
//   if (a === b) {
//     console.log(a, b);
//   }
// };

// console.log(printReadings(5, 6));

// const printReadings2 = (a: number[] | string): void => {
//   console.log(a.slice(0, 3));
// };
// console.log(printReadings2([1, 4, 5, 2]));

// const checkReadings = (
//   readings: { system: number } | { user: number }
// ): void => {
//   if ("system" in readings) {
//     console.log(readings.system);
//   } else {
//     console.log(readings.user);
//   }
// };

// console.log(checkReadings({ system: 5 }));

// const logValue = (x: string | Date) => {
//   if (x instanceof Date) {
//     console.log(x.getDate());
//   } else {
//     console.log(x.toUpperCase());
//   }
// };

// console.log(logValue(new Date()));

// let msg: "Hello" = "Hello";
// msg = "Hello";

// type startServer = {
//   protocol: "http" | "https";
//   port: 3000 | 3001;
// };

// type Config = {
//   port: 3000 | 3001;
//   protocol: "http" | "https";
// };
// interface IConfig {
//   protocol: "http" | "https";
//   port: 3000 | 3001;
//   log: (msg: string) => void;
// }
// type Role = {
//   role: string;
// };
// type ConfigWithRole = Config & Role;

// interface IRole {
//   role: string;
// }

// interface IConfigWithRole extends IConfig, IRole {}

// const serverConfig: IConfigWithRole = {
//   protocol: "https",
//   port: 3000,
//   role: "admin",
//   log: (msg: string): void => console.log(msg),
// };

// const backupConfig: ConfigWithRole = {
//   protocol: "http",
//   port: 3001,
//   role: "sysadmin",
// };

// type StartFunction = (
//   protocol: "http" | "https",
//   port: 3000 | 3001,
//   log: (msg: string) => void
// ) => string;

// type AnimationTimingFunc = "ease" | "ease-in" | "ease-out";
// type AnimationID = string | number;

// const createAnimation = (
//   id: AnimationID,
//   animName: string,
//   timingFunc: AnimationTimingFunc = "ease",
//   duration: number,
//   iterCount: "infinite" | number
// ): void => {
//   const elem = document.querySelector(`#${id}`) as HTMLElement;

//   if (elem) {
//     console.log(`${id} ${animName} ${timingFunc} ${duration} ${iterCount}`);
//   }
// };

// console.log(createAnimation("id", "fade", "ease-in", 5, "infinite"));

// interface IStyles {
//   [key: string]: string;
// }
// const styles: IStyles = {
//   position: "absolute",
//   top: "20px",
//   left: "50px",
// };

// const serverConfig: IBasicConfig = {
//   protocol: "https",
//   port: 3000,
//   // role: "admin",
//   // log: (msg: string): void => console.log(msg),
// };

// const backupConfig: IBasicConfig = {
//   protocol: "http",
//   port: 3001,
//   // role: "sysadmin",
// };

// interface IBasicConfig {
//   protocol: string;
//   port: number;
// }

// const startService = (config: IBasicConfig): "Server started" => {
//   console.log(`Server started on ${config.protocol}://server:${config.port}`);
//   console.log("Invalid port");
//   return "Server started";
// };

// console.log(startService(serverConfig));
// console.log(startService(backupConfig));

// type ValidAmount = "empty" | number;

// //! структура данных склада с одеждой

// interface IClothesWarehouse {
//   jackets: ValidAmount
//   hats: ValidAmount
//   socks: ValidAmount
//   pants: ValidAmount
// }

// //! структура данных склада с канцтоварами

// interface IStationeryWarehouse {
//   scissors: ValidAmount
//   paper: "ValidAmount
// }

// //! структура данных склада с бытовой техникой

// interface IAppliancesWarehouse {
//   dishwashers: ValidAmount
//   cookers: ValidAmount
//   mixers: ValidAmount
// }

// //! общая структура данных, наследует все данные из трех выше
// //! + добавляет свои

// interface iTotalWarehouse
//   extends IClothesWarehouse,
//     IStationeryWarehouse,
//     IAppliancesWarehouse {
//   deficit: boolean;
//   date: Date;
// }

// //! главный объект со всеми данными, должен подходить под формат TotalWarehouse

// const totalData: iTotalWarehouse = {
//   jackets: 5,
//   hats: "empty",
//   socks: "empty",
//   pants: 15,
//   scissors: 15,
//   paper: true,
//   dishwashers: 3,
//   cookers: "empty",
//   mixers: 14,
//   deficit: true,
//   date: new Date(),
// };

// //TODO Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// //TODO и возвращает всегда строку
// //TODO Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// //TODO и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

// //TODO С данным объектом totalData строка будет выглядеть:
// //TODO "We need this items: hats, socks, cookers"
// //TODO Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.

// function printReport(data: iTotalWarehouse): string {
//   let items: string[] = [];

//   const newData = Object.entries(data);
//   newData.filter((item) => {
//     if (item[1] === "empty") {
//       items.push(item[0]);
//     }
//   });
//   if (items) {
//     return `We need these items: ${items.join(", ")}`;
//   } else {
//     return "Everything's fine";
//   }
// }

// console.log(printReport(totalData));

// let salary: number;
// salary = 500;

// interface UserData {
//   isBirthdayData: boolean;
//   ageData: number;
//   userNameData: string;
// }

// const userData = "{}";

// const userObj: UserData = JSON.parse(userData);
// console.log(userObj.smt);

// let isOk = true;
// let movement: boolean | string = false;

//  if (isOk) {
//   movement = "moving";
// }

// interface User {
//   readonly login: string;
//   password: string;
//   age: number;
//   // addressee?: string
//   addressee: string | undefined;
//   parents?: {
//     mother?: string;
//     father?: string;
//   };
// }

// const user: User = {
//   login: "first",
//   password: "qwerty",
//   age: 15,
//   addressee: undefined,
// };

// console.log(user);

// let dbName: string | undefined;

// console.log(dbName!);

// const userFreeze: Readonly<User> = {
//   login: "first",
//   password: "qwerty",
//   age: 15,
//   addressee: undefined,
// };

// const sendUserData = (obj: User, db?: string): void => {
//   dbName = db;
//   console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase());
// };

// console.log(sendUserData(user, "something"));

// const basicPorts: readonly number[] = [3000, 3001, 5555];
// const basicPorts2: readonly [number, ...string[]] = [3000, "3001", "5555"];

// const basicPorts: ReadonlyArray<number> = [3000, 3001, 5555];

// enum Directions {
//   TOP,
//   RIGHT,
//   LEFT,
//   BOTTOM,
// }

// enum TimingFunc {
//   EASE = "ease",
//   EASE_IN = "ease-in",
//   LINEAR = "linear",
// }

// const frame = (elem: string, dir: Directions, tFunc: TimingFunc): void => {
//   if (dir === Directions.RIGHT) {
//     console.log(tFunc, elem);
//   }
// };

// frame("id", Directions.RIGHT, TimingFunc.EASE);

// let something: unknown;
// something = "str";

// let data: string[] = something;
// data.find((e) => e);

// const fetchData = (data: unknown): void => {
//   if (typeof data === "string") {
//     console.log(data.toLowerCase());
//   }
// };

// const userData = '{"isBirthdayData": true}';

// const safeParse = (s: string): unknown => {
//   return JSON.parse(s);
// };

// const data = safeParse(userData);

// const transferData = (d: unknown): void => {
//   if (typeof d === "string") {
//   } else if (typeof d === "object" && d) {
//     console.log(data);
//   } else {
//     console.error("Some error");
//   }
// };

// transferData(data);

// try {
//   if (1) {
//     throw new Error("error");
//   }
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(error);
//   } else if (typeof error === "string") {
//     console.log(error.toUpperCase());
//   }
// }

// type T0 = any | unknown;
// type T1 = number | unknown;

// const dataFromControl = {
//   water: 200,
//   el: 350,
// };

// const checkReadings = (data: typeof dataFromControl): boolean => {
//   const dataFormUser = {
//     water: 200,
//     el: 350,
//   };

//   if (data.el === dataFormUser.el && data.water === dataFormUser.water) {
//     return true;
//   }
//   return false;
// };

// console.log(checkReadings(dataFromControl));

// const PI = 3.14;
// let PIClone: typeof PI;

// enum TypesOfMedia {
//   VIDEO = "video",
//   AUDIO = "audio",
// }

// enum FormatsOfMedia {
//   MP4 = ".mp4",
//   MOV = ".mov",
//   MKV = ".mkv",
//   FLV = ".flv",
//   WEBM = ".webM",
// }

// interface IMedia {
//   name: string;
//   type: TypesOfMedia;
//   format: FormatsOfMedia;
//   subtitles?: string;
//   marks?: unknown;
// }

// function playMedia(
//   { name, type, format, subtitles, marks }: IMedia = {
//     name: "example",
//     type: TypesOfMedia.VIDEO,
//     format: FormatsOfMedia.MOV,
//   }
// ): string {
//   let marksLog: unknown;

//   // * possible solution: Array.isArray(marks)
//   if (marks instanceof Array) {
//     marksLog = marks.join(" ");
//   } else if (typeof marks === "string") {
//     marksLog = marks;
//   } else {
//     marksLog = "Unsupported type of marks";
//   }

//   console.log(`Media ${name}${format} is ${type}
//     Marks: ${marksLog}
//     Subtitles: ${subtitles ?? "none"}`);

//   return "Media started";
// }

// playMedia({
//   name: "WoW",
//   format: FormatsOfMedia.FLV,
//   type: TypesOfMedia.VIDEO,
//   subtitles: "something",
//   marks: ["4:30", "5:40"],
// });

// const fetchData = (url: string, method: "GET" | "POST"): void => {
//   console.log(method);
// };

// const reqOptions = {
//   url: "https://someurl.com",
//   method: "GET",
// } as const;

// fetchData("qqq", "GET");
// fetchData(reqOptions.url, reqOptions.method);

// const box = document.querySelector(".box") as HTMLElement;

// let a = "value" as const;

// let b = { f: 100 } as const;
// let c = [] as const;

// let value = "value";
// let obj = { f: 100 };

// let T0 = obj as const

// let a = (Math.round(Math.random() * 1) ? "yes" : "no") as const;

// const num = 5;
// const strNum: string = num.toString();
// console.log(strNum);

// const str = "5";
// const numStr: number = +str;

// interface Department {
//   name: string;
//   budget: number;
// }

// interface Project {
//   name: string;
//   projectBudget: number;
// }
//   const department: Department = {
//   name: "web-dev",
//   budget: 5000,
// };

// const transformDepartment = (
//   department: Department,
//   amount: number
// ): Project => {
//   return {
//     name: department.name,
//     projectBudget: amount,
//   };
// };

// const mainProject: Project = transformDepartment(department, 4000);

// function to check if n is number "TYPE GUARD"
// const isNumber = (n: string[] | number | boolean): n is number => {
//   return typeof n === "number";
// };

// const isNumber = (n: unknown): n is number => {
//   return typeof n === "number";
// };

// interface Car {
//   name: "car";
//   engine: string;
//   wheels: {
//     amount: number;
//     type: string;
//   };
// }

// interface Ship {
//   name: "ship";
//   engine: string;
//   sail: string;
// }

// interface Airplane {
//   name: "airplane";
//   engine: string;
//   wings: string;
// }

// interface SuperAirplane {
//   name: "something";
//   engine: string;
//   superWings: string;
// }

// const isCar = (car: Vehicle): car is Car => {
//   // return "wheels" in car;
//   // or
//   return (car as Car).wheels !== undefined;
// };

// const isShip = (ship: Vehicle): ship is Ship => {
//   // return "wheels" in car;
//   // or
//   return (ship as Ship).sail !== undefined;
// };

// type Vehicle = Car | Ship | Airplane | SuperAirplane;

// interface ComplexVehicle {
//   name: "car" | "ship" | "airplane";
//   engine: string;
//   wheels?: number;
//   sail?: string;
//   wings?: string;
// }

// const repairVehicle = (vehicle: Vehicle) => {
//   // if (isCar(vehicle)) {
//   //   console.log(vehicle.wheels);
//   // } else if (isShip(vehicle)) {
//   //   console.log(vehicle.sail);
//   // } else {
//   //   console.log(vehicle.wings);
//   // }
//   switch (vehicle.name) {
//     case "car":
//       console.log(vehicle.wheels);
//       break;
//     case "ship":
//       console.log(vehicle.sail);
//       break;
//     case "airplane":
//       console.log(vehicle.wings);
//       break;

//     case "something":
//       console.log(vehicle.superWings);
//       break;
//     default:
//       const something: never = vehicle;
//       console.log("Error", something);
//   }
// };

// interface Square {
//   side: number;
//   area: number;
// }

// interface Rect {
//   a: number;
//   b: number;
//   area: number;
// }

// // * function overload, kind of narrowing
// function calculateArea(side: number): Square;
// function calculateArea(a: number, b: number): Rect;

// function calculateArea(a: number, b?: number): Square | Rect {
//   if (b) {
//     const rect: Rect = {
//       a,
//       b,
//       area: a * b,
//     };
//     return rect;
//   } else {
//     const square: Square = {
//       side: a,
//       area: a * a,
//     };
//     return square;
//   }
// }

// calculateArea(1);

// Request

// type AnimalTypes = "cat" | "dog" | "bird";

// enum AnimalStatus {
//   Available = "available",
//   NotAvailable = "not available",
// }

// interface Animal {
//   animal: AnimalTypes;
//   breed: string;
//   sterilized?: string;
// }

// interface AnimalAvailableData extends Animal {
//   location: string;
//   age?: number;
// }

// interface AnimalNotAvailableData {
//   message: string;
//   nextUpdateIn: Date;
// }

// interface AnimalAvailableResponse {
//   status: AnimalStatus.Available;
//   data: AnimalAvailableData;
// }
// interface AnimalNotAvailableResponse {
//   status: AnimalStatus.NotAvailable;
//   data: AnimalNotAvailableData;
// }

// type ResponseTypes = AnimalAvailableResponse | AnimalNotAvailableResponse;

// // const isAnimal = (animal: Animal): animal is Animal => {
// //   return "animal" in animal;
// // };

// const isAvailable = (res: ResponseTypes): res is AnimalAvailableResponse => {
//   if (res.status === AnimalStatus.Available) {
//     return true;
//   }
//   return false;
// };

// function checkAnimalData(animal: ResponseTypes): AnimalAvailableData | string {
//   if (isAvailable(animal)) {
//     return animal.data;
//   }
//   return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
// }

// type voidFunc = () => void;

// const retString: voidFunc = () => {
//   return "string";
// };

// const s = retString();
// console.log(s);

// const retNum: voidFunc = () => {
//   return 5;
// };

// const n = retNum();

// const names = ["anna", "john"];
// const newArr = names.slice();

// names.forEach((name, i, arr) => arr.push("hey"));

// ! GENERICS

// const processingData = <T, S>(data: T, options: S): string => {
//   switch (typeof data) {
//     case "string":
//       return "data is string";
//       break;
//     case "number":
//       return "data is number";
//       break;
//     default:
//       return "not valid";
//   }
// };

// console.log(processingData(1, "fast"));
// console.log(processingData<number, string>(1, "slow"));

// interface PrintUK {
//   design: number;
// }

// interface PrintES {
//   design: string;
// }
// this is worse than the variant below because u cannot reuse the function with different types, generics solve this problem

// interface Print<T> {
//   design: T;
// }

// const somePrint: Print<string> = {
//   design: "whatever",
// };

// const someOtherPrint: Print<number> = {
//   design: 2342,
// };

// const processing = <T>(data: T): T => data;

// interface ProcessingFn {
//   <T>(data: T): T;
// }

// interface DataServer {
//   processing: ProcessingFn;
// }

// const saver: DataServer = {
//   // processing(data) {
//   //   console.log(data);
//   //   return data;
//   // },
//   processing: <T>(data: T) => data,
// };
// console.log(saver);

// type Something<T> = T;

// interface ParentsOfUser {
//   mother: string;
//   father: string;
// }
// interface User<ParentsData extends ParentsOfUser> {
//   login: string;
//   age: number;
//   parents: ParentsData;
// }

// const user: User<{ mother: string; father: string; married: boolean }> = {
//   login: "something",
//   age: 54,
//   parents: {
//     mother: "something",
//     father: "something",
//     married: true,
//   },
// };

// type OrNull<Type> = Type | null;
// type OneOrMany<Type> = Type | Type[];

// const data: OneOrMany<number[]> = [5];

// const depositMoney = <T extends number | string>(amount: T): T => {
//   console.log(`req to server with amount ${amount}`);
//   return amount;
// };

// depositMoney(5325);
// depositMoney("345345");

// *

// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

// interface PlayerData<
//   GameType extends string | number,
//   HoursType extends string | object | number
// > {
//   game: GameType;
//   hours: HoursType;
//   server: string;
// }

// const player1: PlayerData<string, number> = {
//   game: "CS:GO",
//   hours: 300,
//   server: "basic",
// };

// const player2: PlayerData<number, string> = {
//   game: 2048,
//   hours: "300 h.",
//   server: "arcade",
// };

// const player3: PlayerData<string, object> = {
//   game: "Chess",
//   hours: {
//     total: 500,
//     inMenu: 50,
//   },
//   server: "chess",
// };

// console.log(player1, player2, player3);

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

// enum FigureNames {
//   Rect = "rect",
//   Circle = "circle",
//   Triangle = "triangle",
//   Line = "line",
// }

// interface AmountOfFigures {
//   squares: number;
//   circles: number;
//   triangles: number;
//   others: number;
// }

// interface Data {
//   name: FigureNames;
//   data?: {};
// }

// function calculateAmountOfFigures<T extends Data>(
//   figure: T[]
// ): AmountOfFigures {
//   const values: AmountOfFigures = {
//     squares: 0,
//     circles: 0,
//     triangles: 0,
//     others: 0,
//   };

//   figure.map((elem: Data) => {
//     switch (elem.name) {
//       case FigureNames.Rect:
//         values.squares++;
//         break;
//       case FigureNames.Circle:
//         values.circles++;
//         break;
//       case FigureNames.Triangle:
//         values.triangles++;
//         break;
//       default:
//         values.others++;
//     }
//   });
//   return values;
// }

// const data: Data[] = [
//   {
//     name: FigureNames.Rect,
//     data: { a: 5, b: 10 },
//   },
//   {
//     name: FigureNames.Rect,
//     data: { a: 6, b: 11 },
//   },
//   {
//     name: FigureNames.Triangle,
//     data: { a: 5, b: 10, c: 14 },
//   },
//   {
//     name: FigureNames.Line,
//     data: { l: 15 },
//   },
//   {
//     name: FigureNames.Circle,
//     data: { r: 10 },
//   },
//   {
//     name: FigureNames.Circle,
//     data: { r: 5 },
//   },
//   {
//     name: FigureNames.Rect,
//     data: { a: 15, b: 7 },
//   },
//   {
//     name: FigureNames.Triangle,
//   },
// ];

// console.log(calculateAmountOfFigures(data));

// class User<T, S> {
//   name: T;
//   age: S;

//   constructor(name: T, age: S) {
//     this.name = name;
//     this.age = age;
//   }

//   sayMyFullName<T>(surname: T): string {
//     if (typeof surname !== "string") {
//       return `I have only name ${this.name}`;
//     }
//     return `${this.name} ${surname}`;
//   }
// }

// class AdminUser<T> extends User<string, number> {
//   rules: T;

//   constructor(rules: T) {
//     this.rules = rules;
//   }
// }

// const Ivan = new User("Ivan", 30);
// console.log(Ivan.sayMyFullName("Smith"));

// const Alex = new User<string, number>("Alex", 52);
// console.log(Alex);

// const arr: Array<number> = [1, 2, 3];
// const arr1: number[] = [1, 2, 3];

// const something: ReadonlyArray<string> = ["something"];

// interface IState {
//   data: {
//     name: string;
//   };
//   tag?: string;
// }

// const action = (state: Readonly<IState>) => {};

// const state: Partial<IState> = {};

// const strictState: Required<IState> = {
//   data: { name: "something" },
//   tag: "something",
// };

// interface ICompany {
//   name: string;
//   debt: number;
//   departments: Department;
//   management: {
//     owner: string;
//   };
// }

// interface Department {
//   [key: string]: string;
// }

// const debt = "debt";
// let debt = "debt" as "debt";
// let debt: "debt" = "debt";

// type CompanyDebtType = ICompany[typeof debt];
// type CompanyOwnerType = ICompany["management"]["owner"];
// type CompanyDepartmentsType = ICompany["departments"];
// type CompanyDepartmentsTypes = ICompany["departments"][number];
// type Test = ICompany[keyof ICompany];
// type CompanyKeys = keyof ICompany;
// const keys: CompanyKeys = "name";

// const printDebt = <T, K extends keyof T, S extends keyof T>(
//   company: T,
//   name: K,
//   debt: S
// ) => {
//   console.log(`Company ${company[name]}, debt: ${company[debt]}`);
// };

// const hh: ICompany = {
//   name: "HH",
//   debt: 50000,
//   departments: {
//     sales: "sales",
//     developer: "dev",
//   },
//   management: {
//     owner: "somebody",
//   },
// };

// const google: ICompany = {
//   name: "Google",
//   debt: 1000000,
//   departments: {
//     sales: "sales",
//     developer: "dev",
//   },
//   management: {
//     owner: "somebody",
//   },
// };

// printDebt(hh, "name", "debt");
// printDebt(google, "name", "debt");

// type GoogleKeys = keyof typeof google;
// const keys: GoogleKeys = "name";
// console.log(keys);

// ! PRACTICE LECTION 56

// interface IPhone {
//   company: string;
//   number: number;
// }

// interface IMobilePhone extends IPhone {
//   size: string;
//   companyPartner: IPhone["company"];
//   manufactured: Date;
// }

// const phones: IMobilePhone[] = [
//   {
//     company: "Nokia",
//     number: 1285637,
//     size: "5.5",
//     companyPartner: "MobileNokia",
//     manufactured: new Date("2022-09-01"),
//   },
//   {
//     company: "Samsung",
//     number: 4356637,
//     size: "5.0",
//     companyPartner: "SamMobile",
//     manufactured: new Date("2021-11-05"),
//   },
//   {
//     company: "Apple",
//     number: 4552833,
//     size: "5.7",
//     companyPartner: "no data",
//     manufactured: new Date("2022-05-24T12:00:00"),
//   },
// ];

// interface IPhonesManufacturedAfterDate extends IMobilePhone {
//   initialDate: string;
// }

// type Keys = keyof IMobilePhone;

// // * WITHOUT GENERICS

// function filterPhonesByDate(
//   phones: IMobilePhone[],
//   key: Keys = "manufactured",
//   initial: string
// ): IPhonesManufacturedAfterDate[] {
//   const initialTime = new Date(initial).getTime();
//   const newPhones: IPhonesManufacturedAfterDate[] = [];

//   if (key === "manufactured") {
//     phones.map((phone) => {
//       if (phone[key] instanceof Date) {
//         const date = phone[key].getTime();
//         if (date >= initialTime) {
//           newPhones.push({ ...phone, initialDate: initial });
//         }
//       }
//     });
//   }

//   return newPhones;
// }

// console.log(filterPhonesByDate(phones, "manufactured", "2022-01-01"));

// ! CONDITIONAL TYPES AND INFER

// type Example = "string" extends "Hello" ? string : number;

// type FromUserOrFromBase<T extends string | number> = T extends string
//   ? IDataFromUser
//   : IDataFromBase;

// interface User<T extends "created" | Date> {
//   created: T extends "created" ? "created" : Date;
// }

// const user: User<"created"> = {
//   created: "created",
// };

// //   const test:FromUserOrFromBase<number> =
// interface IDataFromUser {
//   weight: string;
// }

// interface IDataFromBase {
//   calories: number;
// }

// // function calculateDailyCalories(str: string): IDataFromUser;
// // function calculateDailyCalories(num: number): IDataFromBase;

// function calculateDailyCalories<T extends string | number>(
//   NumOrStr: T
// ): T extends string ? IDataFromUser : IDataFromBase {
//   if (typeof NumOrStr === "string") {
//     const obj: IDataFromUser = {
//       weight: NumOrStr,
//     };
//     return obj as FromUserOrFromBase<T>;
//   } else {
//     const obj: IDataFromBase = {
//       calories: NumOrStr,
//     };
//     return obj as FromUserOrFromBase<T>;
//   }
// }

// type GetStringType<T extends "hello" | "world" | string> = T extends "hello"
//   ? "hello"
//   : T extends "world"
//   ? "world"
//   : string;

// const test: GetStringType<"hello"> = "hello";

// type GetFirstType<T> = T extends Array<infer First> ? First : T;

// type Ex = GetFirstType<number[]>;

// type ToArray<T> = T extends any ? T[] : never;

// type ExArray = ToArray<Ex | string>;

// ! MAPPED TYPES
// type Currencies = {
//   usa: "usd";
//   china?: "cny";
//   readonly ukraine: "uah";
//   kz: "tenge";
// };

// type ReadonlyCurrencies = Readonly<Currencies>;

// type Keys = "name" | "age" | "role";

// type User = {
//   [K in Keys]: string;
// };

// const alex: User = {
//   name: "Alex",
//   age: "25",
//   role: "admin",
// };

// ! TEMPLATE LITERAL TYPES

// type MyAnimation = "fade" | "swipe";
// type Direction = "in" | "out";

// type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`;

// type CreateCustomCurrencies<T> = {
//   -readonly [P in keyof T as `custom${Capitalize<string & P>}`]-?: string;
// };

// type CustomCurrencies = CreateCustomCurrencies<Currencies>;

// ! UTILITY TYPE
// type CurrencyWithoutUSA = Omit<Currencies, "usa">;

// type CurrencyUSAAndUkraine = Pick<Currencies, "ukraine" | "usa">;

// type FadeType = Exclude<MyAnimation, "swipe">;

// type CountriesWithoutUSA = Exclude<keyof Currencies, "usa">;

// type SwipeType = Extract<MyAnimation, "swipe">;

// type PlayersNames = "alex" | "john";

// type GameDataCurrency = Record<PlayersNames, CustomCurrencies>;

// const gameData: GameDataCurrency = {
//   alex: {
//     customChina: "something",
//     customKz: "something",
//     customUkraine: "something",
//     customUsa: "something",
//   },
//   john: {
//     customChina: "something",
//     customKz: "something",
//     customUkraine: "something",
//     customUsa: "something",
//   },
// };

// ! PRACTICE LECTION 61

// Необходимо типизировать этот большой объект
// Свойство futureClasses должно быть в зависимости от classes по типу
// Свойства exClients и futureClients тоже должны быть в зависимости от currClients
// ИЛИ все три зависят от общего родителя

// Простыми словами: при добавлении свойства в целевой объект они должны быть
// автоматически добавлены в зависимые (сразу подсказка от TS)

// type Classes = {
//   name: string;
//   startsAt: string;
//   duration: number;
// };

// type FutureClasses = Omit<Classes, "startsAt"> & {
//   willStartsAt: string;
// };

// type CurrentClients = {
//   name: string;
//   age: number | "-";
//   gender: "male" | "female";
//   timeLeft: string;
// };

// type ExClients = Omit<CurrentClients, "timeLeft"> & {
//   makeCallFor: Date;
// };

// type FutureClients = Pick<ExClients, "name" | "makeCallFor"> &
//   Partial<ExClients>;

// interface IFitnessClubCenter {
//   clubName: string;
//   location: string;
//   classes: Classes[];
//   futureClasses: FutureClasses[];
//   currClients: CurrentClients[];
//   exClients: ExClients[];
//   futureClients: FutureClients[];
// }

// const fitnessClubCenter: IFitnessClubCenter = {
//   clubName: "Fitness club Center",
//   location: "central ave. 45, 5th floor",
//   classes: [
//     {
//       name: "yoga",
//       startsAt: "8:00 AM",
//       duration: 60,
//     },
//     {
//       name: "trx",
//       startsAt: "11:00 AM",
//       duration: 45,
//     },
//     {
//       name: "swimming",
//       startsAt: "3:00 PM",
//       duration: 70,
//     },
//   ],
//   futureClasses: [
//     {
//       name: "boxing",
//       willStartsAt: "6:00 PM",
//       duration: 40,
//     },
//     {
//       name: "breath training",
//       willStartsAt: "8:00 PM",
//       duration: 30,
//     },
//   ],
//   currClients: [
//     {
//       name: "John Smith",
//       age: "-",
//       gender: "male",
//       timeLeft: "1 month",
//     },
//     {
//       name: "Alice Smith",
//       age: 35,
//       gender: "female",
//       timeLeft: "3 month",
//     },
//     {
//       name: "Ann Sonne",
//       age: 24,
//       gender: "female",
//       timeLeft: "5 month",
//     },
//   ],
//   exClients: [
//     {
//       name: "Tom Smooth",
//       age: 50,
//       gender: "male",
//       makeCallFor: new Date("2023-08-12"),
//     },
//   ],
//   futureClients: [
//     {
//       name: "Maria",
//       makeCallFor: new Date("2023-07-10"),
//     },
//   ],
// };

// console.log(fitnessClubCenter);

// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации

// interface IForm {
//   login: { isValid: boolean; errorMsg?: string };
//   password: { isValid: boolean };
// }

// const validationData: Validation<IForm> = {
//   login: { isValid: false, errorMsg: "At least 3 characters" },
//   password: { isValid: true },
// };

// type Validation<T> = {
//   [P in keyof T]:
//     | {
//         isValid: true;
//       }
//     | { isValid: false; errorMsg: string };
// };

// console.log(validationData);

// interface ISlider {
//   container?: string;
//   numberOfSlides?: number;
//   speed?: 300 | 500 | 700;
//   direction?: "horizontal" | "vertical";
//   dots?: boolean;
//   arrows?: boolean;
//   animationName?: string;
// }

// function createSlider({
//   container = "",
//   numberOfSlides = 1,
//   speed = 300,
//   direction = "horizontal",
//   dots = true,
//   arrows = true,
// }: ISlider = {}): void {
//   console.log(container, numberOfSlides, speed, direction, dots, arrows);
// }

// createSlider();

// Необходимо типизировать объект настроек, который будет зависим
// от интерфейса ISlider
// Все поля в нем обязательны для заполнения

// type CustomSliderOptions = Required<Omit<ISlider, "animationName">> & {
//   speed: number;
// };

// const customSliderOptions: CustomSliderOptions = {
//   container: "id",
//   numberOfSlides: 4,
//   speed: 500,
//   direction: "horizontal",
//   dots: true,
//   arrows: true,
// };

// function createCustomSlider(options: CustomSliderOptions): void {
//   if ("container" in options) {
//     console.log(options);
//   }
// }

// createCustomSlider(customSliderOptions);

// ! EXTRA UTILITY TYPES

// const calculate = (a: number, b: number): number => {
//   return a * b;
// };

// type CalculateRT = ReturnType<typeof calculate>;
// // number

// type CalculatePT = Parameters<typeof calculate>;
// // a:number, n:number

// type PT1 = Parameters<(a: number) => number>;
// type PT2<T> = Parameters<(arg: T) => T>;

// class Example {
//   constructor(a: number) {}
// }

// type T0 = ConstructorParameters<typeof Example>;

// type FromPromise = Awaited<Promise<number>>;

// interface User {
//   name: string;
// }

// async function fetchUsers(): Promise<User[]> {
//   const users: User[] = [{ name: "alex" }];
//   return users;
// }

// const users = fetchUsers();

// type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

// type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T;
// type FetchDataReturnType = UnwrappedPromise<ReturnType<typeof fetchUsers>>;

// ! CLASSES

// class User {
//   name!: string;
// }

// const ivan = new User();
// ivan.name = "Ivan";
// console.log(ivan);

// class Box {
//   width: number;
//   height: number = 500;
//   volume: number | undefined;
//   _content: string | undefined;
//   constructor(
//     width: number,
//     height: number,
//     volume?: number,
//     _content?: string
//   ) {
//     this.width = width;
//     this.height = height;
//     this.volume = volume;
//     this._content = _content;
//   }

//   calculateVolume(): void {
//     if (!this.volume) {
//       this.volume = this.width * this.height;
//       console.log(`Package Volume: ${this.volume}`);
//     } else {
//       console.log(this.volume);
//     }
//   }

//   checkBoxSize(transport: number): string;
//   checkBoxSize(transport: number[]): string;
//   checkBoxSize(transport: number | number[]): string {
//     if (typeof transport === "number") {
//       return transport >= this.width ? "Ok" : "Not Ok";
//     } else {
//       return transport.some((t) => t >= this.width) ? "Ok" : "Not Ok";
//     }
//   }

//   get content() {
//     return this._content;
//   }

//   set content(value) {
//     this._content = `Date: ${new Date().toTimeString()}, _Content: ${value}`;
//   }
// }

// const firstBox = new Box(150, 255);
// console.log(firstBox.calculateVolume());
// console.log((firstBox.content = "Test"));
// console.log(firstBox.content);

// * EXTENDING CLASSES

// class PresentBox extends Box {
//   wrap: string;
//   height: number = 600;

//   constructor(wrap: string, width: number, height: number) {
//     super(width, height);
//     this.wrap = wrap;
//   }
// }

// const newBox = new PresentBox("red", 500, 300);
// console.log(newBox.wrap);

// * INDEX SIGNATURES
// class Styles {
//     [s: string]: string | ((s: string) => boolean);

// }

// const style = new Styles();
// style.color = "black";
// style.font = "Roboto";

// * IMPLEMENTS

// interface IUser {
//   login: string;
//   password: string;
//   token?: number;
// }

// interface IValidation {
//   valid: boolean;
//   isValid: (data: string) => boolean;
// }

// class UserForm implements IUser, IValidation {
//   login: string;
//   password: string;
//   valid: boolean = false;
//   token?: number;

//   isValid(login: string) {
//     return login.length > 3;
//   }
// }

// ! PRACTICE LECTION 73

enum TransferStatus {
  Pending = "pending",
  Rejected = "rejected",
  Completed = "completed",
}

enum ErrorMessages {
  NotFound = "Not found: 404",
  NotEnoughSpace = "Not enough space: 507",
  Forbidden = "Forbidden: 403",
}

interface ITransfer {
  path: string;
  data: string[];
  date?: Date;
  start: (p: string, d: string[]) => string;
  stop: (reason: string) => string;
}

interface TransferError {
  message: ErrorMessages;
}

class SingleFileTransfer implements ITransfer, TransferError {
  path: string;
  data: string[];
  date?: Date;
  message: ErrorMessages;
  status: TransferStatus;

  checkTransferStatus() {
    return this.status;
  }

  start(p: string, d: string[]): string {
    return `${p}, ${d}, Date: ${new Date().toTimeString()}`;
  }

  stop(reason: string): string {
    return `Reason: ${reason}, Date: ${new Date().toTimeString()}`;
  }

  test(): string {
    return `Status ${this.status}, Error Message: ${this.message}`;
  }
}

const transfer = new SingleFileTransfer();

console.log(transfer.stop("test"));
