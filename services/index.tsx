import { FormDataModel } from "@/models/FormDataModel";
import request, { gql } from "graphql-request";

const MASTER_URL = 'https://api-ca-central-1.hygraph.com/v2/clos8mjcpt9wp01t73w7ta0ha/master';

export const getCarsList = async () => {
    const query = gql`
        query CarLists {
            carLists {
                id,
                name,
                price,
                carAvg,
                carType,
                carBrand,
                noOfSeats,
                image {
                    url
                }
            }
        }
    `
    const result = await request(MASTER_URL, query);
    return result;
}

export const getStoreLocations = async () => {
    const query = gql`
        query storeLocation {
          storesLocations {
              address
          }
        }
    `

    const result = await request(MASTER_URL, query);
    return result;
}

export const createBooking = async (formData: FormDataModel) => {
    const mutationQuery = gql`
        mutation MyMutation {
            createBooking (
                data: {
                    userName: "` + formData.userName + `",
                    pickUpDate: "` + formData.pickUpDate + `",
                    dropOffDate: "` + formData.dropOffDate + `",
                    pickUpTime: "` + formData.pickUpTime + `",
                    dropOffTime: "` + formData.dropOffTime + `",
                    contactNumber: "` + formData.contactNumber + `",
                    carId: {
                        connect : {
                            id: "` + formData.carId + `"
                        }
                    }
                }
            ) {
                id
            }
        }
    `

    const result = await request(MASTER_URL, mutationQuery);
    return result;
}