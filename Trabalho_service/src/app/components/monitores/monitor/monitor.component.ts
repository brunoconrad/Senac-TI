import { Component, OnInit, Input } from '@angular/core';
import { Monitor } from 'src/app/models/monitor.model';
import { ActivatedRoute } from '@angular/router';
import { MonitoresService } from 'src/app/services/monitores.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css'],
  providers: [MonitoresService]
})
export class MonitorComponent implements OnInit {
  
  private monitor: Monitor

  constructor(private route: ActivatedRoute,
    private monitoresService: MonitoresService) {

   }

  ngOnInit() {
    this.monitor = this.monitoresService.getMonitoresPorId(this.route.snapshot.params['id'])
  }

}
