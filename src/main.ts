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

// console.log(sendUserData(user, "asdfasdf"));

// const basicPorts: readonly number[] = [3000, 3001, 5555];
// const basicPorts2: readonly [number, ...string[]] = [3000, "3001", "5555"];

// const basicPorts: ReadonlyArray<number> = [3000, 3001, 5555];
