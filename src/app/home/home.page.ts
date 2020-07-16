import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { PokemonService } from '@core/services/pokemon/pokemon.service';
import { PokemonListModel } from '@shared/models/pokemon-list.model';
import { PokemonDitailsModel } from '@shared/models/pokemon-ditails.model';
import { ModalFilterComponent } from '@shared/components/modal-filter/modal-filter.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  public pokemonsList: PokemonDitailsModel[] = [];

  private currentData!: PokemonListModel;
  private filterWhatcher: Subscription;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    private pokemonService: PokemonService,
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.filterWhatcher = this.pokemonService.filterWhatcher$.subscribe(() => {
      this.currentData = null;
      this.pokemonsList = [];
      this.loadData();
    });
  }

  ngOnDestroy(): void {
    this.filterWhatcher.unsubscribe();
  }

  public loadData(event: any = null) {
    this.pokemonService.updatePokemonList(!event ? 0 : +this.currentData.key).subscribe((result) => {
      this.currentData = result;
      this.pokemonsList = [...this.pokemonsList, ...result.pokemons];
      if (event) {
        event.target.complete();
      }
      if (this.infiniteScroll) {
        this.infiniteScroll.disabled = false;
      }
    });
  }

  public async openFilters(event: Event): Promise<any> {
    event.preventDefault();
    event.stopPropagation();

    const modal = await this.modalController.create({ component: ModalFilterComponent });

    return modal.present();
  }

  public viewDitails(id: string): void {
    this.router.navigate(['/ditails', id]);
  }
}
