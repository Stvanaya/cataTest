export type BasicIdentifiers = {
  id: number;
  uuid: string;
  identifier: string;
}

export type Vendor = {
  color_hex: string;
  city_uuid: string;
  name: string;
  minimum_purchase: number;
  maximum_purchase: number;
  images: string[];
}

type VendorInfo = Vendor & BasicIdentifiers;

export default VendorInfo;
