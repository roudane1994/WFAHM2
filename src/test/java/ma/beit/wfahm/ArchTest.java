package ma.beit.wfahm;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("ma.beit.wfahm");

        noClasses()
            .that()
            .resideInAnyPackage("ma.beit.wfahm.service..")
            .or()
            .resideInAnyPackage("ma.beit.wfahm.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..ma.beit.wfahm.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
