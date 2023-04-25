<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns:dp="http://www.datapower.com/extensions"
xmlns:dpconfig="http://www.datapower.com/param/config"
xmlns:tem="http://learnwebservices.com/services/tempconverter"
extension-element-prefixes="dp"
exclude-result-prefixes="dp dpconfig"
>
<xsl:output method="xml"/>

<xsl:template match="/">

<xsl:variable name="uri" select="string(dp:request-header('uri'))" />

<xsl:choose>

<xsl:when test="$uri='/mul'">
<dp:set-variable name="'var://service/routing-url'" value ="'http://www.dneonline.com/calculator.asmx'" />
</xsl:when>
<xsl:otherwise>
<dp:reject> No route found </dp:reject>
</xsl:otherwise>
</xsl:choose>



</xsl:template>

</xsl:stylesheet>