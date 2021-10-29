export function addBorder(picture: string[]): string[] {
  let border = '*****';
  let updatedPicture = [border];

  picture.forEach((element) => {
    updatedPicture.push(`${'*' + element + '*'}`);
  });
  updatedPicture.push(border);
  return updatedPicture;
}

console.log(addBorder(['abc', 'ded']));
