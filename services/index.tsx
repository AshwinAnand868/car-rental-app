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