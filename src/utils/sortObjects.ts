import { upperCase } from "lodash";
import moment from "moment";

export const sortByProperty = <T>(array: T[], property: keyof T, ascending = true) => {
  if (typeof property === "string" && property.indexOf(".") !== -1) {
    return sortByNestedProperty(array, property, ascending);
  } else {
    // sorting works different if data is string, date or number
    if (typeof array[0][property] === "string") {
      const isDate = moment(array[0][property] as string, "MM/DD/YYYY", true).isValid();

      return isDate
        ? sortDates(array, property, ascending)
        : sortStrings(array, property, ascending);
    } else {
      return traditionalBubleSorting(array, property, ascending);
    }
  }
};

const traditionalBubleSorting = <T>(array: T[], property: keyof T, ascending: boolean) => {
  return array.sort((a, b) =>
    a[property] < b[property]
      ? ascending
        ? -1
        : 1
      : a[property] > b[property]
      ? ascending
        ? 1
        : -1
      : 0
  );
};

const sortStrings = <T>(array: T[], property: keyof T, ascending: boolean) => {
  // for strings, all to uppercase (to have uppers and lowers together, Aa, Bb, Zz)
  return array.sort((a, b) =>
    upperCase(a[property] as string) < upperCase(b[property] as string)
      ? ascending
        ? -1
        : 1
      : upperCase(a[property] as string) > upperCase(b[property] as string)
      ? ascending
        ? 1
        : -1
      : 0
  );
};

const sortDates = <T>(array: T[], property: keyof T, ascending: boolean) => {
  // for dates... format to YYYYMMDD
  return array.sort((a, b) => {
    const aux = moment(new Date(a[property] as string)).format("YYYYMMDD");
    const bux = moment(new Date(b[property] as string)).format("YYYYMMDD");
    return aux < bux ? (ascending ? -1 : 1) : aux > bux ? (ascending ? 1 : -1) : 0;
  });
};

export const sortByNestedProperty = <T>(array: T[], property: string, ascending: boolean) => {
  const list = property.split(".");
  return array.sort((a, b) => {
    const aa = list.reduce((current, name) => current[name], a);
    const bb = list.reduce((current, name) => current[name], b);
    return aa < bb ? (ascending ? -1 : 1) : aa > bb ? (ascending ? 1 : -1) : 0;
  });
};

export const sortByProperties = <T>(array: T[], properties: string[], ascendings = []) => {
  if (properties.reduce((result, current) => result || current.indexOf(".") !== -1, false)) {
    return sortByNestedProperties(array, properties, ascendings);
  } else {
    return array.sort((a, b) => {
      let order = 0;
      let index = 0;
      while (order === 0 && index < properties.length) {
        const property = properties[index];
        const ascending = typeof ascendings[index] === "undefined" ? true : ascendings[index];
        order =
          a[property] < b[property]
            ? ascending
              ? -1
              : 1
            : a[property] > b[property]
            ? ascending
              ? 1
              : -1
            : 0;
        index += 1;
      }
      return order;
    });
  }
};

export const sortByNestedProperties = <T>(
  array: T[],
  properties: string[],
  ascendings: boolean[]
) => {
  const list = properties.map((a) => a.split("."));
  return array.sort((a, b) => {
    let order = 0;
    let index = 0;
    while (order === 0 && index < properties.length) {
      const aa = list[index].reduce((current, name) => current[name], a);
      const bb = list[index].reduce((current, name) => current[name], b);
      const ascending = typeof ascendings[index] === "undefined" ? true : ascendings[index];
      order = aa < bb ? (ascending ? -1 : 1) : aa > bb ? (ascending ? 1 : -1) : 0;
      index += 1;
    }
    return order;
  });
};
