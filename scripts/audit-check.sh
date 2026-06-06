#!/usr/bin/env bash
# Contrôle de santé local du projet (en attendant que la CI soit la référence).
# Usage : bash scripts/audit-check.sh
# Voir docs/AUDIT.md pour l'interprétation des résultats.
set -uo pipefail

cd "$(dirname "$0")/.." || exit 1

echo "==> 1/3 Lint + typecheck (npm run lint)"
npm run lint
LINT=$?

echo ""
echo "==> 2/3 Build (npm run build)"
NEXT_PUBLIC_BASE_URL="${NEXT_PUBLIC_BASE_URL:-https://codeursenseine.com}" npm run build
BUILD=$?

echo ""
echo "==> 3/3 Vulnérabilités (npm audit, niveau >= high)"
npm audit --audit-level=high
AUDIT=$?

echo ""
echo "================ Résumé ================"
echo "lint/typecheck : $([ $LINT -eq 0 ] && echo OK || echo ÉCHEC)"
echo "build          : $([ $BUILD -eq 0 ] && echo OK || echo ÉCHEC)"
echo "npm audit      : $([ $AUDIT -eq 0 ] && echo 'OK (aucune high/critique)' || echo 'à traiter (cf. AUDIT §1)')"
echo "========================================"

# Le code de sortie reflète lint+build (audit informatif, cf. deps transitives Contentlayer)
[ $LINT -eq 0 ] && [ $BUILD -eq 0 ]
