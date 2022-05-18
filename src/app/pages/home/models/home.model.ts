export interface HomeDateMovie {
  year: string;
  sort(arg0: (a: any, b: any) => number);
  random(): any;
  length: any;
  Director: string;
  Reparto: string;
  año: Date;
  genero: string;
  img: string;
  titulo: string;
  video: string;
}
export interface homeDateMovieVistas {
  sort(arg0: (a: any, b: any) => number);
  random(): any;
  length: any;
  titulo: string;
  genero: String;
  Director: String;
  year: string;
  Reparto: string;
  img: string;
  video: string;
  descripcion: string;
  duracion: String;
  time: String;
}

export interface homeLoginSchema {
  sort(arg0: (a: any, b: any) => number);
  random(): any;
  length: any;
  email: string;
  name: String;
  password: string;
  signupDate: string;
  favoriteMovies: HomeDateMovie;
}
