import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router,
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
    this.router.navigate(['/home']);
  }
}
