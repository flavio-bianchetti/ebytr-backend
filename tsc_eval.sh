#! solução utilizada no frontend do projeto Trybe Futebol Clube
#! https://github.com/tryber/sd-015-b-trybe-futebol-clube

npx -y tsc

if [ $? != 0 ]; then
  echo "Ocorreu um ero ao compilar o TypeScript, verifique seu código e tente novamente"
  exit 1
fi
