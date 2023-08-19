import { GuestInterface } from 'interfaces/guest';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  date: any;
  time: any;
  number_of_people: number;
  guest_id?: string;
  restaurant_id?: string;
  created_at?: any;
  updated_at?: any;

  guest?: GuestInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  guest_id?: string;
  restaurant_id?: string;
}
