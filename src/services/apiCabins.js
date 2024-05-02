import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  // eslint-disable-next-line no-unused-vars
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    console.log(data);
    throw new Error("Cabines not to be loaded");
  }

  return data;
}

export async function createEditCabine(newCabine, id) {
  console.log(newCabine, id);
  const hasImagePath = newCabine.image?.startsWith?.(supabaseUrl);
  const imageName = `${newCabine.image.name}`.replaceAll("/", "");
  //const imageName = `${newCabine.image.name}`.replaceAll("/", "");

  console.log(imageName);
  //https://rmxcdgnzrzbaiktddmbx.supabase.co/storage/v1/object/public/cabine/cabin-001.jpg

  const imagePath = hasImagePath
    ? newCabine.image
    : `${supabaseUrl}/storage/v1/object/public/cabine/${imageName}`;
  let query = supabase.from("cabins");
  if (!id) query = query.insert([{ ...newCabine, image: imagePath }]);

  if (id) query = query.update({ ...newCabine, image: imagePath }).eq("id", id);
  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Cabines not to be loaded");
  }
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabine")
    .upload(imageName, newCabine.image);
  console.log(imageName);
  console.log(newCabine.image);

  /*if (storageError) {
    await supabase.from("cabins").delete().eq("id", id);
    console.error(storageError);
    throw new Error(
      "Cabines image could not be uploaded and the cabine was not created"
    );
  }*/

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabines not to be loaded");
  }

  return data;
}
