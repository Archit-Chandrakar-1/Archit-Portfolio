"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

// ==========================================
// 1. PROJECT ACTIONS
// ==========================================

export async function createProject(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;
  const link = formData.get("link") as string;
  const image = formData.get("image") as string;

  await prisma.project.create({
    data: {
      title,
      description,
      category,
      link,
      image,
      tags: ["React", "Next.js"], // Default tags (you can make this dynamic later)
    }
  });

  revalidatePath("/portfolio");
  revalidatePath("/admin/projects");
  redirect("/admin/projects");
}

export async function deleteProject(id: string) {
  await prisma.project.delete({ where: { id } });
  revalidatePath("/portfolio");
  revalidatePath("/admin/projects");
}


// ==========================================
// 2. EXPERIENCE ACTIONS
// ==========================================

export async function createExperience(formData: FormData) {
  const company = formData.get("company") as string;
  const role = formData.get("role") as string;
  const location = formData.get("location") as string;
  const startDate = formData.get("startDate") as string;
  const endDate = formData.get("endDate") as string;
  const description = formData.get("description") as string;
  
  // Handle highlights: split text by new lines into an array
  const highlightsRaw = formData.get("highlights") as string;
  const highlights = highlightsRaw ? highlightsRaw.split('\n').filter(line => line.trim() !== '') : [];

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

  revalidatePath("/"); // Experience is on the Home Page
  revalidatePath("/admin/experience");
  redirect("/admin/experience");
}

export async function deleteExperience(id: string) {
  await prisma.experience.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/experience");
}


// ==========================================
// 3. CERTIFICATION ACTIONS
// ==========================================

export async function createCertification(formData: FormData) {
  const name = formData.get("name") as string;
  const issuer = formData.get("issuer") as string;
  const date = formData.get("date") as string;
  const link = formData.get("link") as string;
  const image = formData.get("image") as string;

  await prisma.certification.create({
    data: {
      name,
      issuer,
      date,
      link,
      image
    }
  });

  revalidatePath("/"); // Certifications are on the Home Page
  revalidatePath("/admin/certifications");
  redirect("/admin/certifications");
}

export async function deleteCertification(id: string) {
  await prisma.certification.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/certifications");
}