import { IMagasin } from 'app/shared/model/magasin.model';

export interface IMagasinUtilisateur {
  id?: number;
  nordre?: number;
  utilisateur?: string;
  magasinUtilisateurs?: IMagasin;
  magasin?: IMagasin;
}

export class MagasinUtilisateur implements IMagasinUtilisateur {
  constructor(
    public id?: number,
    public nordre?: number,
    public utilisateur?: string,
    public magasinUtilisateurs?: IMagasin,
    public magasin?: IMagasin
  ) {}
}
