export interface CarModel {
  id: 0;
  model: string;
  brand: string;
  createdDate: string;
  light: {
    lightId: number;
    headLights: string;
    fogLights: string;
    angle: number;
    createdDate: string;
    carId: number;
  };
}

