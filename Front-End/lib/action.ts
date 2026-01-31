"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

// --- CREATE PROJECT ---
export async function createProject(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;
  const link = formData.get("link") as string;
  const image = formData.get("image") as string; 
  // For now, we'll paste a URL (like from Unsplash or GitHub). 
  // Later we can add real file upload.

  await prisma.project.create({
    data: {
      title,
      description,
      category,
      link,
      image,
      tags: ["React", "Next.js"], // Default tags for now
    }
  });

  // Refresh the pages so the new data shows up immediately
  revalidatePath("/portfolio"); 
  revalidatePath("/admin/projects");
  
  // Go back to the list
  redirect("/admin/projects");
}

// --- DELETE PROJECT ---
export async function deleteProject(id: string) {
  await prisma.project.delete({ where: { id } });
  revalidatePath("/portfolio");
  revalidatePath("/admin/projects");
}
export async function createExperience(formData: FormData) {
  const company = formData.get("company") as string;
  const role = formData.get("role") as string;
  const location = formData.get("location") as string;
  const startDate = formData.get("startDate") as string;
  const endDate = formData.get("endDate") as string; // e.g. "Present"
  const description = formData.get("description") as string;
  
  // Handle highlights (split by new lines for bullet points)
  const highlightsRaw = formData.get("highlights") as string;
  const highlights = highlightsRaw.split('\n').filter(line => line.trim() !== '');

  await prisma.experience.create({
    data: {
      company,
      role,
      location,
      startDate,
      endDate,
      description,
      highlights
    }
  });

  revalidatePath("/"); // Update home page
  revalidatePath("/admin/experience"); // Update admin list
  redirect("/admin/experience");
}

export async function deleteExperience(id: string) {
  await prisma.experience.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/experience");
}