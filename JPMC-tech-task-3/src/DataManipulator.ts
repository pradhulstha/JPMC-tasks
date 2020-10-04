import { ServerRespond } from './DataStreamer';

//Interface for the Row in the graph
export interface Row {
  price_abc: number,
  price_def: number,
  ratio: number,
  upper_bound: number,
  lower_bound: number,
  timestamp: Date,
  trigger_alert: number | undefined,
}


export class DataManipulator {
  //Sending back a single Row Object to display in the graph
  static generateRow(serverResponds: ServerRespond[]): Row {

      //Initializing the value from the server
      const priceABC = (serverResponds[0].top_ask.price + serverResponds[0].top_bid.price) / 2;
      const priceDEF = (serverResponds[1].top_ask.price + serverResponds[1].top_bid.price) / 2;

      const ratio = priceABC/priceDEF;
      const upperBound = 1 + 0.03;
      const lowerBound = 1 - 0.04;
      return {
        price_abc: priceABC,
        price_def: priceDEF,
        ratio,
        timestamp: serverResponds[0].timestamp > serverResponds[1].timestamp 
        ? serverResponds[0].timestamp : serverResponds[1].timestamp,
        upper_bound: upperBound,
        lower_bound: lowerBound,
        trigger_alert: (ratio > upperBound || ratio < lowerBound) ? ratio : undefined
      };
    }
}
