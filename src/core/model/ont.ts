export interface OntModel {
  id: string;
  serialNumber: string;
  type: string;
  numberWo: string;
  locationId: string;
  unitAddress: string;
  name: string;
  dateActivation: Date;
  status: string;
  information: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export interface OntDTO {
  serialNumber?: string;
  type?: string;
  numberWo?: string;
  locationId?: string;
  unitAddress?: string;
  name?: string;
  dateActivation?: Date;
  status?: string;
  information?: string;
}
