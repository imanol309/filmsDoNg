export interface HomeDateMovie {
  shift();
  length(length: any);
  filter(arg0: (item: any) => boolean): any;
	Director: string;
	Reparto: string;
	año: Date;
	genero: string;
	img: string;
	titulo: string;
	video: string;
}