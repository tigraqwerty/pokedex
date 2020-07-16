import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { PokemonService } from '@core/services/pokemon/pokemon.service';
import { IPokemonApiItemResponse } from '@shared/models/pokemon-api-item-response.interface';

@Component({
  selector: 'app-modal-filter',
  templateUrl: './modal-filter.component.html',
  styleUrls: ['./modal-filter.component.scss'],
})
export class ModalFilterComponent implements OnInit {
  public filterList: IPokemonApiItemResponse[] = [];
  public selectedFilter!: IPokemonApiItemResponse;

  constructor(private pokemonService: PokemonService, private modalController: ModalController) {}

  ngOnInit(): void {
    this.selectedFilter = this.pokemonService.getSelectedFilter();
    this.pokemonService.getFilter().subscribe((filters) => {
      this.filterList = filters;
    });
  }

  public dismissModal(item: IPokemonApiItemResponse = null): void {
    if (!!item) {
      this.selectedFilter = item.name === this.selectedFilter?.name ? null : item;
      this.pokemonService.setSelectedFilter(this.selectedFilter);
    }
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
