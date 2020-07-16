import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { mergeMap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonService } from '@core/services/pokemon/pokemon.service';
import { PokemonDitailsModel } from '@shared/models/pokemon-ditails.model';

@Component({
  selector: 'app-ditails',
  templateUrl: './ditails.component.html',
  styleUrls: ['./ditails.component.scss'],
})
export class DitailsComponent implements OnInit {
  public currentPokemon!: PokemonDitailsModel;
  public transate = {};
  constructor(
    private navCtrl: NavController,
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.transate = {
      weight: this.translateService.instant('tr.weight'),
      height: this.translateService.instant('tr.height'),
    };
    this.route.paramMap
      .pipe(
        mergeMap((parmasMap) => {
          let pokemonId = parmasMap.get('id');
          return this.pokemonService.getPokemonById(+pokemonId);
        })
      )
      .subscribe((pokemon) => {
        this.currentPokemon = pokemon;
      });
  }

  public goBack(): void {
    this.navCtrl.navigateBack('/home');
  }
}
