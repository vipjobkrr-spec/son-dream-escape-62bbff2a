import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  useEffect(() => {
    document.title = "Политика конфиденциальности — База отдыха Сон";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl py-12 md:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          На главную
        </Link>

        <h1 className="text-3xl md:text-4xl font-display font-semibold mb-8">
          Политика конфиденциальности
        </h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных
            пользователей сайта базы отдыха «Сон» (далее — «Оператор»).
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground mt-8">
            1. Какие данные мы собираем
          </h2>
          <p>
            При оформлении заявки на бронирование мы можем запрашивать: имя, номер телефона, адрес электронной
            почты, желаемые даты заезда и выезда, количество гостей.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground mt-8">
            2. Цели обработки данных
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Обработка заявок на бронирование и связь с гостями.</li>
            <li>Улучшение качества обслуживания.</li>
            <li>Выполнение требований законодательства РФ.</li>
          </ul>

          <h2 className="text-xl font-display font-semibold text-foreground mt-8">
            3. Защита данных
          </h2>
          <p>
            Оператор принимает необходимые организационные и технические меры для защиты персональных данных
            от несанкционированного доступа, изменения, раскрытия или уничтожения.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground mt-8">
            4. Передача данных третьим лицам
          </h2>
          <p>
            Персональные данные не передаются третьим лицам, за исключением случаев, предусмотренных
            законодательством Российской Федерации.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground mt-8">
            5. Права пользователя
          </h2>
          <p>
            Вы вправе запросить информацию о своих персональных данных, потребовать их изменения или удаления,
            обратившись к нам любым удобным способом.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground mt-8">
            6. Контактная информация
          </h2>
          <p>
            По вопросам, связанным с обработкой персональных данных, вы можете связаться с нами по телефону
            +7 989 839-70-00 или написать в мессенджер.
          </p>

          <p className="text-sm mt-10 pt-6 border-t border-border">
            Дата последнего обновления: 15 марта 2026 г.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
