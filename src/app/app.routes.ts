import { Routes } from '@angular/router';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';

export const routes: Routes = [

    { path: 'dashboard1',
        loadComponent: () => import('./dashboard1/dashboard1.component').then((m) => m.Dashboard1Component)
    },
  { path: 'dashboard2',
     component: Dashboard2Component 
  },
  { path: 'dashboard3',
     component: Dashboard3Component
  },
  { path: '', redirectTo: '/dashboard2', pathMatch: 'full' },
];
