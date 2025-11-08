import { StyleSheet } from "react-native";

/**
 * Paleta de colores de la aplicación Amiibo
 */
export const Colors = {
  primary: "#E60012",       // Rojo Nintendo
  secondary: "#00A4E4",     // Azul Nintendo
  accent: "#FFD700",        // Dorado para detalles
  background: "#1A1A2E",    // Fondo oscuro
  cardBackground: "#16213E",// Fondo de tarjetas
  text: "#FFFFFF",          // Texto principal
  textSecondary: "#B8B8B8", // Texto secundario
  success: "#4CAF50",       // Verde
  error: "#F44336",         // Rojo
  border: "#2E2E48",        // Bordes
};

/**
 * Estilos globales de la aplicación
 */
export const globalStyles = StyleSheet.create({
  // === CONTENEDORES ===
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },

  // === BARRA DE BÚSQUEDA ===
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  searchIcon: {
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: Colors.text,
    paddingVertical: 8,
  },

  searchClearIcon: {
    marginLeft: 8,
  },

  // === TARJETAS DE AMIIBOS ===
  amiiboCard: {
    flexDirection: "row",
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  amiiboImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: Colors.border,
  },

  amiiboInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },

  amiiboName: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 4,
  },

  amiiboCharacter: {
    fontSize: 14,
    color: Colors.secondary,
    marginBottom: 2,
  },

  amiiboSeries: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 6,
  },

  amiiboTypeBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: Colors.primary,
  },

  amiiboTypeText: {
    fontSize: 10,
    fontWeight: "600",
    color: Colors.text,
    textTransform: "uppercase",
  },

  // === DETALLE DE AMIIBO ===
  detailContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  detailHeader: {
    alignItems: "center",
    paddingVertical: 24,
    backgroundColor: Colors.cardBackground,
  },

  detailImage: {
    width: 200,
    height: 250,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: Colors.primary,
    backgroundColor: "transparent",
  },

  detailName: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 8,
    textAlign: "center",
    paddingHorizontal: 16,
  },

  detailRace: {
    fontSize: 18,
    color: Colors.secondary,
    textAlign: "center",
  },

  detailContent: {
    padding: 16,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.text,
    marginTop: 16,
    marginBottom: 12,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },

  infoLabel: {
    fontSize: 16,
    color: Colors.textSecondary,
    fontWeight: "500",
    flex: 1,
  },

  infoValue: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: "bold",
    flex: 2,
    textAlign: "right",
  },

  // === ESTADOS ===
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },

  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: Colors.textSecondary,
  },

  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
  },

  errorText: {
    fontSize: 16,
    color: Colors.error,
    textAlign: "center",
    marginBottom: 16,
  },

  retryButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },

  retryButtonText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "bold",
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  emptyText: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
  },

  // === LISTA ===
  listContent: {
    padding: 16,
  },

  // === TABS ===
  tabBarStyle: {
    backgroundColor: Colors.cardBackground,
    borderTopWidth: 0,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    height: 60,
  },
});