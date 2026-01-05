import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";


interface ITime {
  startTime: string;
  endTime: string
}

interface IFlight {
  id: number;
  price: number;
  fromto: string;
  time: ITime;
  company: string;
  duration: number;
  connectionAmount: number;
}

interface IFlightState {
  flights: IFlight[];
  filtered: IFlight[];
  filterByCompany: string[];
  filterByTransfersCount: number[];
  loading: boolean;
  error: string | null;
}

export const fetchFlights = createAsyncThunk<
  IFlight[],
  undefined,
  { rejectValue: string }
>("flights/fetchFlights", async function (_, { rejectWithValue }) {
  const res = await fetch("./flights.json");
  if (!res.ok) {
    return rejectWithValue("Server Error!");
  }
  const data = await res.json();
  return data;
});


const initialState: IFlightState = {
  flights: [],
  filtered: [],
  filterByCompany: [],
  filterByTransfersCount: [],
  loading: false,
  error: null,
};



const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    sortTicketsCheap: (state) => {
      state.flights = state.filtered.sort((a, b) => a.price - b.price);
    },
    sortTicketsFast: (state) => {
      state.flights = state.filtered.sort((a, b) => a.duration - b.duration);
    },
    sortTicketsOptimal: (state) => {
      state.flights = state.filtered.sort(
        (a, b) => a.connectionAmount - b.connectionAmount
      );
    },
    filterTickets: (state) => {
      if (
        state.filterByCompany.length > 0 &&
        state.filterByTransfersCount.length === 0
      ) {
        state.filtered = state.flights.filter((flight) =>
          state.filterByCompany.includes(flight.company)
        );
      } else if (
        state.filterByCompany.length === 0 &&
        state.filterByTransfersCount.length > 0
      ) {
        state.filtered = state.flights.filter((flight) =>
          state.filterByTransfersCount.includes(flight.connectionAmount)
        );
      } else if (
        state.filterByCompany.length > 0 &&
        state.filterByTransfersCount.length > 0
      ) {
        state.filtered = state.flights.filter(
          (flight) =>
            state.filterByTransfersCount.includes(flight.connectionAmount) &&
            state.filterByCompany.includes(flight.company)
        );
      } else if (
        state.filterByCompany.length === 0 &&
        state.filterByTransfersCount.length === 0
      ) {
        state.filtered = state.flights;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchFlights.fulfilled,
        (state, action: PayloadAction<IFlight[]>) => {
          state.flights = action.payload;
          state.filtered = action.payload;
          state.loading = false;
        }
      );
  },
});

export const {
  sortTicketsCheap,
  sortTicketsFast,
  sortTicketsOptimal,
  filterTickets,
} = flightsSlice.actions;

export default flightsSlice.reducer;