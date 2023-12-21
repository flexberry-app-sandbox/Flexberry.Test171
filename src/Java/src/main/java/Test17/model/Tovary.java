package Test17.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test17.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Товары
 */
@Entity(name = "IISTest17Товары")
@Table(schema = "public", name = "Товары")
public class Tovary {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ЦенаЗаЕд")
    private Double ценазаед;

    @Column(name = "КодТовара")
    private Integer кодтовара;

    @Column(name = "Название")
    private String название;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "VNalichii")
    @Convert("VNalichii")
    @Column(name = "ВНаличии", length = 16, unique = true, nullable = false)
    private UUID _vnalichiiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "VNalichii", insertable = false, updatable = false)
    private VNalichii vnalichii;


    public Tovary() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getЦенаЗаЕд() {
      return ценазаед;
    }

    public void setЦенаЗаЕд(Double ценазаед) {
      this.ценазаед = ценазаед;
    }

    public Integer getКодТовара() {
      return кодтовара;
    }

    public void setКодТовара(Integer кодтовара) {
      this.кодтовара = кодтовара;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }


}