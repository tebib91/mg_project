import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { ApiserviceService } from 'src/app/core/apiservice.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  questions = {
    question_1: 'SAV / Nouveau',
    question_2: 'Comment vous évaluez la prise en charge et le suivi par notre équipe commerciale?',
    question_3: 'Explication et réponse aux questions.',
    question_4: 'Démonstration',
    question_5: 'Recommenderiez-vous la marque MG à votre entourage?',
    question_6: 'MG lover, quel est votre degré de satisfaction par rapport à votre voiture MG?',
    question_7: 'Disponibilité et joignabilité de l\'équipe.',
    question_8: 'Prise en charge et accueil',
    question_9: 'Suivi de votre dossier',
    question_10: 'Explication des travaux réalisés.',
    question_11: 'Réponses aux questions.',
    question_12: 'Recommanderiez-vous le service après-vente MG à votre entourage?',
    full_name: 'Nom complet',
    car_model: 'Model de la véhicule',
    suggestion: 'Des suggestions'
  }
  response: any;
  objectKeys = Object.keys;
  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private apiService: ApiserviceService) { }

  ngOnInit() {
    this.apiService.getId('response', this.data).subscribe(dataResponse => {
      console.log('response', dataResponse);
      this.response = dataResponse;
      this.response.question_1 = this.response.question_1 ? 'Nouveau Client' : 'SAV';
    });
  }

}
